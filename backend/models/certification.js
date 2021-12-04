
const mongoose = require('mongoose');
const { ObjectId } = require('bson');

const certificationSchema = mongoose.Schema({
  _id: {
    type: ObjectId,
    required: true 
  },
  name: {
      type: String,
      required: true
    }
});

module.exports = mongoose.model('Certification', certificationSchema);