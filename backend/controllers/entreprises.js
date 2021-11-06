const Entreprise = require('../models/entreprise');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getEntreprises = async (req, res) => {
  
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');

    // Get all entreprises from database
    const entreprises = await Entreprise.find().lean();

    // Remove unnecessary properties
    entreprises.forEach(entreprise => {
      delete entreprise.__v;
    });

    // Return response
    res.status(200);
    res.send(JSON.stringify(entreprises));
};

module.exports.postEntreprise = async (req, res) => {
   
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
 
    // Create new object to save using data from parameters
    const entreprise = new Entreprise({
      _id: ObjectId(),
      name: req.body.name
    });

    // Save new object to database
    await entreprise.save()
    .then(() => {
      // Creation was successful
      res.status(200);
      console.log("Entreprise successfully created with _id: " + entreprise._id)
      res.send(JSON.stringify(entreprise));
  })
  .catch(err => {
      // An error occured
      res.status(500);
      const errorDescription = `Could not create Entreprise with _id ${entreprise._id}.`;
      console.log(errorDescription, err);
      res.send(errorDescription + " Error message: " + err.message);
  });
};

module.exports.deleteEntreprise = async (req, res) => {

  // Set headers
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

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

  // Delete object from database
  Entreprise.deleteOne({ _id: id })
  .then(() => {
      // Deletion was successful
      res.status(200);
      console.log("Entreprise with _id " + id + " successfully deleted");
      res.send(JSON.stringify(groupe));
  })
  .catch(err => {
      // An error occured
      res.status(500);
      const errorDescription = `Could not delete Entreprise with _id ${id}.`;
      console.log(errorDescription, err);
      res.send(errorDescription + " Error message: " + err.message);
  });

};

module.exports.updateEntreprise = async (req, res) => {
  
  // Set headers
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  // Update object from database
  Entreprise.updateOne({ _id: req.body._id }, { name: req.body.name })
  .then(() => {
      // Update was successful
      res.status(200);
      console.log("Entreprise with _id " + req.body._id + " successfully updated");
      res.send(JSON.stringify(groupe));
  })
  .catch(err => {
      // An error occured while updating
      res.status(500);
      const errorDescription = `Could not update Entreprise with _id ${req.body._id}.`;
      console.log(errorDescription, err);
      res.send(errorDescription + " Error message: " + err.message);
  });
};