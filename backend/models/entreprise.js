
const mongoose = require('mongoose');

const entrepriseSchema = mongoose.Schema({
  name: {
      type: String,
      required: true
    },
  //imagePath: { type: String, required: true },
});

module.exports = mongoose.model('Entreprise', entrepriseSchema);