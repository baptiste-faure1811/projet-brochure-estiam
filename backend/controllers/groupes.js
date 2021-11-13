const Groupe = require('../models/groupe');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const r2 = require('r2');

module.exports.getGroupes = async (req, res) => {

    // Get hostname
    const hostname = req.headers.host;
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');
  
    // Get all groupes from database
    const groupes = await Groupe.find().lean();

    // Remove unnecessary properties
    groupes.forEach(groupe => {
        delete groupe.__v;
    });

    // Check weather to return only unites or full details
    const getFullDetails = req.query.getFullDetails === 'true';
    if (getFullDetails) {
        for (const groupe of groupes) {
            await r2("http://" + hostname + "/domaines/groupeID/" + groupe._id + "?getFullDetails=" + getFullDetails).json
            .then((data) => {
                groupe.domaines = data;
            }).catch(err => {
                res.status(500);
                console.log(err.message);
                res.send(err.message);
            });
        }
    }
  
    // Return response
    res.status(200);
    res.send(JSON.stringify(groupes));
};

module.exports.getGroupe = async (req, res) => {

  // Get hostname
  const hostname = req.headers.host;
    
  // Set headers
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Content-Type', 'application/json');

  // Get id from parameter and check if valid
  if (ObjectId.isValid(req.params.groupeID) == false) {
      // Invalid Id
      const errorDescription = 'Please provide a valid _id.';
      console.log(errorDescription);
      res.status(500);
      res.send(errorDescription);
      return;
  }
  const groupeID = req.params.groupeID;

  // Get groupe from database with mathing _id
  const groupe = await Groupe.findOne({ _id: groupeID }).lean();

  res.status(200);
  if (groupe == undefined || groupe == null) {
      // If no result, result empty JSON
      console.log('No Groupe with _id: ' + groupeID);
      res.send(JSON.stringify({}));
      return;
  } else {
      // Remove unnecessary properties
      delete groupe.__v;

      // Check weather to return only the groupe or full details
      const getFullDetails = req.query.getFullDetails === 'true';
      if (getFullDetails) {
            await r2("http://" + hostname + "/domaines/groupeID/" + groupe._id + "?getFullDetails=" + getFullDetails).json
            .then((data) => {
                groupe.domaines = data;
            }).catch(err => {
                res.status(500);
                console.log(err.message);
                res.send(err.message);
            });
      }

      // Return response
      res.send(JSON.stringify(groupe));
  }
};

module.exports.getGroupeByProgrammeID = async (req, res) => {

  // Get hostname
  const hostname = req.headers.host;
    
  // Set headers
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Content-Type', 'application/json');

  // Get id from parameter and check if valid
  if (ObjectId.isValid(req.params.programmeID) == false) {
      // Invalid Id
      const errorDescription = 'Please provide a valid programmeID.';
      console.log(errorDescription);
      res.status(500);
      res.send(errorDescription);
      return;
  }
  const programmeID = req.params.programmeID;

  // Get all groupes from database with matching programmeID
  const groupes = await Groupe.find({ programme: programmeID }).lean();

  res.status(200);
  if (groupes == undefined || groupes == null || groupes.length == 0) {
      // If no result, result empty JSON
      console.log('No Groupe with programmeID: ' + programmeID);
      res.send(JSON.stringify([]));
      return;
  } else {
      // Remove unnecessary properties
      groupes.forEach(groupe => {
        delete groupe.__v;
      });

      // Check weather to return only groupes or full details
      const getFullDetails = req.query.getFullDetails === 'true';
      if (getFullDetails) {
          for (const groupe of groupes) {
              await r2("http://" + hostname + "/domaines/groupeID/" + groupe._id + "?getFullDetails=" + getFullDetails).json
              .then((data) => {
                  groupe.domaines = data;
              }).catch(err => {
                  res.status(500);
                  console.log(err.message);
                  res.send(err.message);
              });
          }
      }

      // Return response
      res.send(JSON.stringify(groupes));
  }
};

module.exports.postGroupe = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Content-Type', 'application/json');
 
    // Create new object to save using data from parameters
    const groupe = new Groupe({
      _id: ObjectId(),
      name: "Groupe Name",
      totalECTS: 60,
      totalDuration: 130,
      programme: ObjectId()
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
