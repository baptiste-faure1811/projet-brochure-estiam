const Certification = require('../models/certification');
const mongoose = require('mongoose');
const {ObjectId} = require('bson');


module.exports.getCertifications= async (req, res) => {
  const certifications = await Certification.find();
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200);
  res.send(JSON.stringify(certifications));
};

module.exports.postCertification =  (req, res) => {
 
   
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.status(200);
 
    const certification = new Certification({
     _id: ObjectId(),
     name: req.body.name
    });
   certification.save()
    .then(() => {
      console.log("ajouté avec succès")
    })
    .catch((err) => console.log(`Could not save certification`, err));
};

module.exports.deleteCertification = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.status(200);
  
  const id = req.params.deleteID;     

   Certification.deleteOne({_id : id})
  .then(() => {
    console.log("supprimé avec succès")
  })
  .catch((err) => console.log(`Could not delete certification with id ${id}`, err));
};

module.exports.updateCertification = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.status(200);
  
Certification.updateOne({_id: req.body._id },{name: req.body.name})
  .then(() => {
    console.log("Successfully updated certification.")
  })
  .catch((err) => console.log(`Could not update certification with id ${req.body._id}`, err));

};

 