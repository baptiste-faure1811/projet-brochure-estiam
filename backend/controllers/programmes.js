const Programme = require('../models/programme');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const r2 = require('r2');

module.exports.getProgrammes = async (req, res) => {

    // Get hostname
    const hostname = req.headers.host;
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');

    // Get all programmes from database
    const programmes = await Programme.find().lean();

    // Remove unnecessary properties
    programmes.forEach(programme => {
        delete programme.__v;
    });

    // Check weather to return only programmes or full details
    const showDetails = req.query.showDetails === 'true';
    if (showDetails) {
        for (const programme of programmes) {
            await r2("http://" + hostname + "/groupes/programmeID/" + programme._id + "?showDetails=" + showDetails).json
            .then((data) => {
                programme.groupes = data;
            }).catch(err => {
                res.status(500);
                console.log(err.message);
                res.send(err.message);
            });
        }
    }

    // Return response
    res.status(200);
    res.send(JSON.stringify(programmes));
};

module.exports.getProgrammeByYear = async (req, res) => {

    // Get hostname and year from parameters
    const year = req.params.year;
    if (year == null || year == undefined || year == "") {
        res.status(500);
        console.log("Please provide a valid year.");
        res.send("Please provide a valid year.");
        return;
    }
    const hostname = req.headers.host;
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');

    // Get the programme from database matching given year
    const programme = await Programme.findOne({ year: year }).lean();

    if (programme == undefined || programme == null) {
        // If no result, result empty JSON
        console.log('No Programme matching year: ' + year);
        res.send(JSON.stringify({}));
        return;
    }
    
    // Remove unnecessary properties
    delete programme.__v;

    // Check weather to return only programmes or full details
    const showDetails = req.query.showDetails === 'true';
    if (showDetails) {
        await r2("http://" + hostname + "/groupes/programmeID/" + programme._id + "?showDetails=" + showDetails).json
            .then((data) => {
                programme.groupes = data;
            }).catch(err => {
                res.status(500);
                console.log(err.message);
                res.send(err.message);
            });
    }

    // Return response
    res.status(200);
    res.send(JSON.stringify(programme));
};

module.exports.postProgramme = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Content-Type', 'application/json');

    // Check all required parameters
    if (req.body.year == undefined || req.body.name == undefined || req.body.duration == undefined) {
        res.status(500);
        const errorDescription = "Please provide all required parameters to create a new programme.";
        console.log(errorDescription);
        res.send(errorDescription);
        return;
    }
 
    // Create new object to save using data from parameters
    const programme = new Programme({
        _id: ObjectId(),
        name: req.body.name,
        year: req.body.year,
        totalDuration: req.body.duration,
    });

    // Save new object to database
    await programme.save()
    .then(() => {
        // Creation was successful
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

module.exports.deleteProgramme = async (req, res) => { 

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
    Programme.deleteOne({ _id: id })
    .then(() => {
        // Deletion was successful
        res.status(200);
        console.log("Programme with _id " + id + " successfully deleted");
        res.send(JSON.stringify([]));
    })
    .catch(err => {
        // An error occured
        res.status(500);
        const errorDescription = `Could not delete Programme with _id ${id}.`;
        console.log(errorDescription, err);
        res.send(errorDescription + " Error message: " + err.message);
    });

} 
