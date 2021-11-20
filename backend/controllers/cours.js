const Cours = require('../models/cours');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getCours = async (req, res) => {
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get all groupes from database
    const cours = await Cours.find().lean();

    // Remove unnecessary properties
    cours.forEach(coursUnit => {
        delete coursUnit.__v;
    });
  
    // Return response
    res.status(200);
    res.send(JSON.stringify(cours));
};

module.exports.getSingleCours = async (req, res) => {
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get id from parameter and check if valid
    if (ObjectId.isValid(req.params.coursID) == false) {
        // Invalid Id
        const errorDescription = 'Please provide a valid _id.';
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    }
    const coursID = req.params.coursID;
  
    // Get Domaine from database with mathing _id
    const cours = await Cours.findOne({ _id: coursID }).lean();
    
    // Check if null
    if (cours == undefined || cours == null) {
        // If no result, result empty JSON
        console.log('No Cours with _id: ' + coursID);
        res.send(JSON.stringify({}));
        return;
    } else {
        // Remove unnecessary properties
        delete cours.__v;
  
        // Return response
        res.status(200);
        res.send(JSON.stringify(cours));
    }
};

module.exports.getCoursByDomaineID = async (req, res) => {
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get id from parameter and check if valid
    if (ObjectId.isValid(req.params.domaineID) == false) {
        // Invalid Id
        const errorDescription = 'Please provide a valid domaineID.';
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    }
    const domaineID = req.params.domaineID;
  
    // Get all domaines from database with matching domaineID
    const cours = await Cours.find({ domaine: domaineID }).lean();
    
    // Check if null
    if (cours == undefined || cours == null || cours.length == 0) {
        // If no result, result empty JSON
        console.log('No Cours with domaineID: ' + domaineID);
        res.send(JSON.stringify([]));
        return;
    } else {
        // Remove unnecessary properties
        cours.forEach(singleCours => {
          delete singleCours.__v;
        });
  
        // Return response
        res.status(200);
        res.send(JSON.stringify(cours));
    }
};

module.exports.postCours = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Content-Type', 'application/json');
 
    // Check all required parameters
    if (req.body.name == undefined || req.body.ECTSCredit == undefined || req.body.ECTSCode == undefined || req.body.oldCode == undefined || req.body.semestre == undefined || req.body.duration == undefined || req.body.domaine == undefined) {
        res.status(500);
        const errorDescription = "Please provide all required parameters to create a new cours.";
        console.log(errorDescription);
        res.send(errorDescription);
        return;
    }

    // Check if domaineID is a valid ObjectID
    if (ObjectId.isValid(req.body.domaine) == false) {
        // Invalid Id
        const errorDescription = 'Please provide a valid domaineID.';
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    }

    // Create new object to save using data from parameters
    const cours = new Cours({
        _id: ObjectId(),
        name: req.body.name,
        ECTSCredit: req.body.ECTSCredit,
        ECTSCode: req.body.ECTSCode,
        oldCode: req.body.oldCode,
        semestre: req.body.semestre,
        duration: req.body.duration,
        domaine: ObjectId(req.body.domaine)
    });
    
    // Save new object to database
    await cours.save()
    .then(() => {
        // Creation was successful
        res.status(200);
        console.log("Cours successfully created with _id: " + cours._id)
        res.send(JSON.stringify(cours));
    })
    .catch(err => {
        // An error occured
        res.status(500);
        const errorDescription = `Could not create Cours with _id ${cours._id}.`;
        console.log(errorDescription, err);
        res.send(errorDescription + " Error message: " + err.message);
    });

};

module.exports.deleteCours = async (req, res) => { 

    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Content-Type', 'application/json');

    // Get id from paramater
    const id = req.params.deleteID;

    if (id == undefined || id == "" || id == null) {
        // No id in parameters
        res.status(500);
        const errorDescription = 'No _id provided. Please provide the object\'s id to delete.';
        console.log(errorDescription);
        res.send(errorDescription);
        return;
    }

    // Check if deleteID is a valid ObjectID
    if (ObjectId.isValid(id) == false) {
        // Invalid Id
        const errorDescription = 'Please provide a valid id.';
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    }

    // Delete object from database
    Cours.deleteOne({ _id: id })
    .then(() => {
        // Deletion was successful
        res.status(200);
        console.log("Cours with _id " + id + " successfully deleted");
        res.send(JSON.stringify([]));
    })
    .catch(err => {
        // An error occured
        res.status(500);
        const errorDescription = `Could not delete Cours with _id ${id}.`;
        console.log(errorDescription, err);
        res.send(errorDescription + " Error message: " + err.message);
    });

} 

module.exports.updateCours = async (req, res) => {
  
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Content-Type', 'application/json');

    // Check required parameters
    const id = req.params.updateID;
    if (id == undefined || ObjectId.isValid(id) == false) {
        res.status(500);
        const errorDescription = "Please provide a valid Cours's _id.";
        console.log(errorDescription);
        res.send(errorDescription);
        return;
    }

    // Check optional parameters
    var updatedSchema = {};
    if (req.body.name != undefined) {
        updatedSchema.name = req.body.name;
    }
    if (req.body.ECTSCredit != undefined) {
        updatedSchema.ECTSCredit = req.body.ECTSCredit;
    }
    if (req.body.ECTSCode != undefined) {
        updatedSchema.ECTSCode = req.body.ECTSCode;
    }
    if (req.body.oldCode != undefined) {
        updatedSchema.oldCode = req.body.oldCode;
    }
    if (req.body.semestre != undefined) {
        updatedSchema.semestre = req.body.semestre;
    }
    if (req.body.duration != undefined) {
        updatedSchema.duration = req.body.duration;
    }
    if (req.body.domaine != undefined) {
        if (ObjectId.isValid(req.body.domaine) == true) {
            updatedSchema.domaine = req.body.domaine;
        } else {
            const errorDescription = 'Please provide a valid domaineID.';
            console.log(errorDescription);
            res.status(500);
            res.send(errorDescription);
            return;
        }
    }
    
    // Update object from database
    Cours.updateOne({ _id: id }, updatedSchema)
    .then(() => {
        // Update was successful
        res.status(200);
        console.log("Cours with _id " + id + " successfully updated");
        res.send(JSON.stringify([]));
    })
    .catch(err => {
        // An error occured while updating
        res.status(500);
        const errorDescription = `Could not update Cours with _id ${id}.`;
        console.log(errorDescription, err);
        res.send(errorDescription + " Error message: " + err.message);
    });
  };
