const Entreprise = require('../models/entreprise');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getEntreprises = async (req, res) => {
  const entreprises = await Entreprise.find();
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200);
  res.send(JSON.stringify(entreprises));
};

module.exports.postEntreprise = async (req, res) => {
   
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.status(200);
 
    const entreprise = new Entreprise({
      _id: ObjectId(),
      name: req.body.name
    });
    const createdEntreprise = await entreprise.save()
    .then(() => {
      console.log("Success")
    })
    .catch((err) => console.log(`Could not save entreprise with id ${entreprise._id}`, err));
};

module.exports.deleteEntreprise = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.status(200);
  
  const id = req.params.deleteID; 

  Entreprise.deleteOne({ _id: id })
  .then(() => {
    console.log("Success")
  })
  .catch((err) => console.log(`Could not delete entreprise with id ${id}`, err));
};

module.exports.updateEntreprise = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.status(200);

  Entreprise.updateOne({ _id: req.body._id }, { name: req.body.name })
  .then(() => {
    console.log("Successfully updated entreprise.")
  })
  .catch((err) => console.log(`Could not update entreprise with id ${req.body._id}`, err));
};