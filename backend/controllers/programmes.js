const Programme = require('../models/programme');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getProgrammes = async (req, res) => {

    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');

    // Get all programmes from database
    const programmes = await Programme.find().lean()

    // Remove unnecessary properties
    programmes.forEach(programme => {
        delete programme.groups;
        delete programme.__v;
    });

    // Return response
    res.status(200);
    res.send(JSON.stringify(programmes));
};

module.exports.postProgramme = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
    // Create new object to save using data from parameters
    const programme = new Programme({
      _id: ObjectId(),
      name: "Programme Name",
      year: 2021,
      totalDuration: 200,
      groups: []
    });

    // Save new object to database
    await programme.save()
    .then(() => {
        // Creation was successfull
        res.status(200);
        console.log("Progamme successfully created with _id: " + programme._id)
        res.send(JSON.stringify(programme));
    })
    .catch(err => {
        // An error occured
        res.status(500);
        const errorDescription = `Could not create Programme with _id ${programme._id}.`;
        console.log(errorDescription, err);
        res.send(errorDescription + " Error message: " + err.message);
    });
};
