const Groupe = require('../models/groupe');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getGroupes = async (req, res) => {
    const groupes = await Groupe.find();
    res.setHeader("Access-Control-Allow-Origin","*");
    res.status(200);
    res.send(JSON.stringify(groupes));
};

module.exports.postGroupe = async (req, res) => {
   
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.status(200);
 
    const groupe = new Groupe({
      _id: ObjectId(),
      name: "Groupe Name",
      totalECTS: 60,
      totalDuration: 130,
      uniteEnseignement: []
    });
    
    const createdGroupe = await groupe.save()
    .then(() => {
      console.log("Success")
      res.send(JSON.stringify(groupe));
    })
    .catch((err) => console.log(`Could not save groupe with id ${groupe._id}`, err));

};
