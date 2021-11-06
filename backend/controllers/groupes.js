const Groupe = require('../models/groupe');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getGroupes = async (req, res) => {
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get all groupes from database
    const groupes = await Groupe.find().lean();

    // Remove unnecessary properties
    groupes.forEach(groupe => {
        delete groupe.uniteEnseignement;
        delete groupe.__v;
    });
  
    // Return response
    res.status(200);
    res.send(JSON.stringify(groupes));
};

module.exports.postGroupe = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
    // Create new object to save using data from parameters
    const groupe = new Groupe({
      _id: ObjectId(),
      name: "Groupe Name",
      totalECTS: 60,
      totalDuration: 130,
      uniteEnseignement: []
    });
    
    // Save new object to database
    await groupe.save()
    .then(() => {
        // Creation was successful
        res.status(200);
        console.log("Groupe successfully created with _id: " + groupe._id)
        res.send(JSON.stringify(groupe));
    })
    .catch(err => {
        // An error occured
        res.status(500);
        const errorDescription = `Could not create Groupe with _id ${groupe._id}.`;
        console.log(errorDescription, err);
        res.send(errorDescription + " Error message: " + err.message);
    });

};
