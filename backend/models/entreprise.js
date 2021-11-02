
const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const entrepriseSchema = mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true
  },
  name: {
      type: String,
      required: true
    },
});

module.exports = mongoose.model('Entreprise', entrepriseSchema);