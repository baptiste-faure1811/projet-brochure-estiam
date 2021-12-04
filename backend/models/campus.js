
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

const campusSchema = mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true 
  },
  name: {
      type: String,
      required: true
    },
  image: {
    type: String,
    required: true
  },
  infos: {
    type: String,
    required: true
  },
  adresse:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Campus', campusSchema);