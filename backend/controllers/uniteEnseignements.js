const UniteEnseignement = require('../models/uniteEnseignement');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getUniteEnseignements = async (req, res) => {
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get all groupes from database
    const uniteEnseignements = await UniteEnseignement.find().lean();

    // Remove unnecessary properties
    uniteEnseignements.forEach(unite => {
        delete unite.domaines;
        delete unite.__v;
    });
  
    // Return response
    res.status(200);
    res.send(JSON.stringify(uniteEnseignements));
};

module.exports.postUniteEnseignement = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
    // Create new object to save using data from parameters
    const uniteEnseignement = new UniteEnseignement({
      _id: ObjectId(),
      name: "UniteEnseignement Name",
      code: "someCode",
      totalDuration: 130,
      domaines: []
    });
    
    // Save new object to database
    await uniteEnseignement.save()
    .then(() => {
        // Creation was successful
        res.status(200);
        console.log("UniteEnseignement successfully created with _id: " + uniteEnseignement._id)
        res.send(JSON.stringify(uniteEnseignement));
    })
    .catch(err => {
        // An error occured
        res.status(500);
        const errorDescription = `Could not create UniteEnseignement with _id ${uniteEnseignement._id}.`;
        console.log(errorDescription, err);
        res.send(errorDescription + " Error message: " + err.message);
    });

};
