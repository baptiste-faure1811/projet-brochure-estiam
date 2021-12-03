const Campus = require('../models/campus');
const mongoose = require('mongoose');
const {ObjectId} = require('bson');
module.exports.getLescampus = async (req, res) => {
  const lescampus = await Campus.find();
  res.setHeader("Access-Control-Allow-Origin","*");
  res.status(200);
  res.send(JSON.stringify(lescampus));
};



module.exports.postCampus =  (req, res) => {
 
   
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.status(200);
 
    const campus = new Campus({
     _id: ObjectId(),
     name:req.body.name,
     image:req.body.image,
     infos:req.body.infos,
     adresse:req.body.adresse
    });
    campus.save()
    .then(() => {
      console.log("ajouté avec succès")
    })
    .catch((err) => console.log(`Could not save campus`, err));
};


module.exports.deleteCampus = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.status(200);
  
  const id = req.params.deleteID;     

   Campus.deleteOne({_id : id})
  .then(() => {
    console.log("supprimé avec succès")
  })
  .catch((err) => console.log(`Could not delete campus with id ${id}`, err));
};

module.exports.updateCampus = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.status(200);
  console.log(`my adresse is  ${req.body.adresse}`);
Campus.updateOne({ _id: req.body._id }, { name: req.body.name ,image: req.body.image, infos: req.body.infos, adresse: req.body.adresse})
  .then(() => {
    console.log("Successfully updated campus.")
  })
  .catch((err) => console.log(`Could not update campus with id ${req.body._id}`, err));


};