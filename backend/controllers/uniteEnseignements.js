const UniteEnseignement = require('../models/uniteEnseignement');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const r2 = require('r2');

module.exports.getUniteEnseignements = async (req, res) => {

    // Get hostname
    const hostname = req.headers.host;
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get all groupes from database
    const uniteEnseignements = await UniteEnseignement.find().lean();

    // Remove unnecessary properties
    uniteEnseignements.forEach(unite => {
        delete unite.__v;
    });

    // Check weather to return only unites or full details
    const getFullDetails = req.query.getFullDetails === 'true';
    if (getFullDetails) {
        for (const unite of uniteEnseignements) {
            await r2("http://" + hostname + "/domaines/uniteEnseignementID/" + unite._id + "?getFullDetails=" + getFullDetails).json
            .then((data) => {
                unite.domaines = data;
            }).catch(err => {
                res.status(500);
                console.log(err.message);
                res.send(err.message);
            });
        }
    }
  
    // Return response
    res.status(200);
    res.send(JSON.stringify(uniteEnseignements));
};

module.exports.getUniteEnseignement = async (req, res) => {

    // Get hostname
    const hostname = req.headers.host;
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get id from parameter and check if valid
    if (ObjectId.isValid(req.params.uniteID) == false) {
        // Invalid Id
        const errorDescription = 'Please provide a valid _id.';
        console.log(errorDescription);
        res.status(500);
        res.send(errorDescription);
        return;
    }
    const uniteID = req.params.uniteID;
  
    // Get unite_enseignement from database with mathing _id
    const unite = await UniteEnseignement.findOne({ _id: uniteID }).lean();
    
    // Check if null
    if (unite == undefined || unite == null) {
        // If no result, result empty JSON
        console.log('No UniteEnseignement with _id: ' + uniteID);
        res.send(JSON.stringify({}));
        return;
    } else {
        // Remove unnecessary properties
        delete unite.__v;

        // Check weather to return only the unite or full details
        const getFullDetails = req.query.getFullDetails === 'true';
        if (getFullDetails) {
            await r2("http://" + hostname + "/domaines/uniteEnseignementID/" + unite._id + "?getFullDetails=" + getFullDetails).json
                .then((data) => {
                    unite.domaines = data;
                }).catch(err => {
                    res.status(500);
                    console.log(err.message);
                    res.send(err.message);
                });
        }
  
        // Return response
        res.status(200);
        res.send(JSON.stringify(unite));
    }
};

module.exports.getUniteEnseignementsByGroupeID = async (req, res) => {
        
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
  
    // Get all UniteEnseignement from database with matching groupeID
    const uniteEnseignements = await UniteEnseignement.find({ groupe: groupeID }).lean();
    
    // Check if null
    if (uniteEnseignements == undefined || uniteEnseignements == null || uniteEnseignements.length == 0) {
        // If no result, result empty JSON
        console.log('No UniteEnseignement with groupeID: ' + groupeID);
        res.send(JSON.stringify([]));
        return;
    } else {
        // Remove unnecessary properties
        uniteEnseignements.forEach(unite => {
          delete unite.__v;
        });

        // Check weather to return only unites or full details
        const getFullDetails = req.query.getFullDetails === 'true';
        if (getFullDetails) {
            for (const unite of uniteEnseignements) {
                await r2("http://" + hostname + "/domaines/uniteEnseignementID/" + unite._id + "?getFullDetails=" + getFullDetails).json
                .then((data) => {
                    unite.domaines = data;
                }).catch(err => {
                    res.status(500);
                    console.log(err.message);
                    res.send(err.message);
                });
            }
        }
  
        // Return response
        res.status(200);
        res.send(JSON.stringify(uniteEnseignements));
    }
};

module.exports.postUniteEnseignement = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Content-Type', 'application/json');
 
    // Create new object to save using data from parameters
    const uniteEnseignement = new UniteEnseignement({
      _id: ObjectId(),
      name: "UniteEnseignement Name",
      code: "someCode",
      totalDuration: 130,
      groupe: ObjectId()
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
