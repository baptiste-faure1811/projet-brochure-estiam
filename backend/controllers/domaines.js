const Domaine = require('../models/domaine');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const r2 = require('r2');

module.exports.getDomaines = async (req, res) => {

    // Get hostname
    const hostname = req.headers.host;
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get all groupes from database
    const domaines = await Domaine.find().lean();

    // Remove unnecessary properties
    domaines.forEach(domaine => {
        delete domaine.__v;
    });

    // Check weather to return only unites or full details
    const showDetails = req.query.showDetails === 'true';
    if (showDetails) {
        for (const domaine of domaines) {
            await r2("http://" + hostname + "/cours/domaineID/" + domaine._id).json
            .then((data) => {
                domaine.cours = data;
            }).catch(err => {
                res.status(500);
                console.log(err.message);
                res.send(err.message);
            });
        }
    }
  
    // Return response
    res.status(200);
    res.send(JSON.stringify(domaines));
};

module.exports.getDomaine = async (req, res) => {

    // Get hostname
    const hostname = req.headers.host;
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get id from parameter and check if valid
    if (ObjectId.isValid(req.params.domaineID) == false) {
        // Invalid Id
        const errorDescription = 'Please provide a valid _id.';
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    }
    const domaineID = req.params.domaineID;
  
    // Get Domaine from database with mathing _id
    const domaine = await Domaine.findOne({ _id: domaineID }).lean();
    
    // Check if null
    if (domaine == undefined || domaine == null) {
        // If no result, result empty JSON
        console.log('No Domaine with _id: ' + domaineID);
        res.send(JSON.stringify({}));
        return;
    } else {
        // Remove unnecessary properties
        delete domaine.__v;

        // Check weather to return only unites or full details
        const showDetails = req.query.showDetails === 'true';
        if (showDetails) {
            await r2("http://" + hostname + "/cours/domaineID/" + domaine._id).json
                .then((data) => {
                    domaine.cours = data;
                }).catch(err => {
                    res.status(500);
                    console.log(err.message);
                    res.send(err.message);
                });
        }
  
        // Return response
        res.status(200);
        res.send(JSON.stringify(domaine));
    }
};

module.exports.getDomainesByGroupeID = async (req, res) => {

    // Get hostname
    const hostname = req.headers.host;
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get id from parameter and check if valid
    if (ObjectId.isValid(req.params.groupeID) == false) {
        // Invalid Id
        const errorDescription = 'Please provide a valid groupeID.';
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    }
    const groupeID = req.params.groupeID;
  
    // Get all domaines from database with matching groupeID
    const domaines = await Domaine.find({ groupe: groupeID }).lean();
    
    // Check if null
    if (domaines == undefined || domaines == null || domaines.length == 0) {
        // If no result, result empty JSON
        console.log('No Domaine with groupeID: ' + groupeID);
        res.send(JSON.stringify([]));
        return;
    } else {
        // Remove unnecessary properties
        domaines.forEach(domaine => {
          delete domaine.__v;
        });

        // Check weather to return only unites or full details
        const showDetails = req.query.showDetails === 'true';
        if (showDetails) {
            for (const domaine of domaines) {
                await r2("http://" + hostname + "/cours/domaineID/" + domaine._id).json
                .then((data) => {
                    domaine.cours = data;
                }).catch(err => {
                    res.status(500);
                    console.log(err.message);
                    res.send(err.message);
                });
            }
        }
  
        // Return response
        res.status(200);
        res.send(JSON.stringify(domaines));
    }
};

module.exports.postDomaine = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Content-Type', 'application/json');
 
    // Check all required parameters
    if (req.body.name == undefined || req.body.groupeID == undefined) {
        res.status(500);
        const errorDescription = "Please provide all required parameters to create a new domaine.";
        console.log(errorDescription);
        res.send(errorDescription);
        return;
    }

    // Check if groupeID is a valid ObjectID
    if (ObjectId.isValid(req.body.groupeID) == false) {
        // Invalid Id
        const errorDescription = 'Please provide a valid groupeID.';
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    }

    // Create new object to save using data from parameters
    const domaine = new Domaine({
        _id: ObjectId(),
        name: req.body.name,
        groupe: ObjectId(req.body.groupeID)
    });
    
    // Save new object to database
    await domaine.save()
    .then(() => {
        // Creation was successful
        res.status(200);
        console.log("Domaine successfully created with _id: " + domaine._id)
        res.send(JSON.stringify(domaine));
    })
    .catch(err => {
        // An error occured
        res.status(500);
        const errorDescription = `Could not create Domaine with _id ${domaine._id}.`;
        console.log(errorDescription, err);
        res.send(errorDescription + " Error message: " + err.message);
    });

};

module.exports.deleteDomaine = async (req, res) => { 

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
    Domaine.deleteOne({ _id: id })
    .then(() => {
        // Deletion was successful
        res.status(200);
        console.log("Domaine with _id " + id + " successfully deleted");
        res.send(JSON.stringify([]));
    })
    .catch(err => {
        // An error occured
        res.status(500);
        const errorDescription = `Could not delete Domaine with _id ${id}.`;
        console.log(errorDescription, err);
        res.send(errorDescription + " Error message: " + err.message);
    });

} 
