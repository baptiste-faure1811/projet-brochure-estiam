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
