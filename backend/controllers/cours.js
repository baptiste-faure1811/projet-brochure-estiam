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

module.exports.postCours = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
    // Create new object to save using data from parameters
    const cours = new Cours({
      _id: ObjectId(),
      name: "Cours Name",
      ECTSCredit: 30,
      ECTSCode: "ECTS Code",
      oldCode: "Some Old Code",
      semestre: 1,
      duration: 120,
      domaine: ObjectId()
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
