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
    if (req.body.name == undefined || req.body.ects == undefined || req.body.ectsCode == undefined || req.body.oldCode == undefined || req.body.semestre == undefined || req.body.duration == undefined || req.body.domaineID == undefined) {
        res.status(500);
        const errorDescription = "Please provide all required parameters to create a new cours.";
        console.log(errorDescription);
        res.send(errorDescription);
        return;
    }

    // Check if domaineID is a valid ObjectID
    if (ObjectId.isValid(req.body.domaineID) == false) {
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
        ECTSCredit: req.body.ects,
        ECTSCode: req.body.ectsCode,
        oldCode: req.body.oldCode,
        semestre: req.body.semestre,
        duration: req.body.duration,
        domaine: ObjectId(req.body.domaineID)
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
