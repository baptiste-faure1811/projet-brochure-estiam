const Domaine = require('../models/domaine');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getDomaines = async (req, res) => {
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get all groupes from database
    const domaines = await Domaine.find().lean();

    // Remove unnecessary properties
    domaines.forEach(domaine => {
        delete domaine.__v;
    });
  
    // Return response
    res.status(200);
    res.send(JSON.stringify(domaines));
};

module.exports.getDomaine = async (req, res) => {
    
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
        const errorDescription = 'No Domaine with _id: ' + domaineID;
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    } else {
        // Remove unnecessary properties
        delete domaine.__v;
  
        // Return response
        res.status(200);
        res.send(JSON.stringify(domaine));
    }
};

module.exports.getDomainesByUniteEnseignementID = async (req, res) => {
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get id from parameter and check if valid
    if (ObjectId.isValid(req.params.uniteEnseignementID) == false) {
        // Invalid Id
        const errorDescription = 'Please provide a valid uniteEnseignementID.';
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    }
    const uniteEnseignementID = req.params.uniteEnseignementID;
  
    // Get all domaines from database with matching uniteEnseignementID
    const domaines = await Domaine.find({ uniteEnseignement: uniteEnseignementID }).lean();
    
    // Check if null
    if (domaines == undefined || domaines == null || domaines.length == 0) {
        const errorDescription = 'No Domaine with uniteEnseignementID: ' + uniteEnseignementID;
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    } else {
        // Remove unnecessary properties
        domaines.forEach(domaine => {
          delete domaine.__v;
        });
  
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
 
    // Create new object to save using data from parameters
    const domaine = new Domaine({
      _id: ObjectId(),
      name: "Domaine Name",
      uniteEnseignement: ObjectId()
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
