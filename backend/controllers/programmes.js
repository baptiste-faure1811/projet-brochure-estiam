const Programme = require('../models/programme');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

module.exports.getProgrammes = async (req, res) => {
    const programmes = await Programme.find();
    res.setHeader("Access-Control-Allow-Origin","*");
    res.status(200);
    res.send(JSON.stringify(programmes));
};

module.exports.postProgramme = async (req, res) => {
   
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.status(200);
 
    const programme = new Programme({
      _id: ObjectId(),
      name: "Programme Name",
      year: 2021,
      totalDuration: 200,
      groups: []
    });
    const createdProgramme = await programme.save()
    .then(() => {
      console.log("Success")
      res.send(JSON.stringify(programme));
    })
    .catch((err) => console.log(`Could not save programme with id ${programme._id}`, err));
};
