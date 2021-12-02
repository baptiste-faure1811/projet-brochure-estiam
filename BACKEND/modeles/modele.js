const mongoose = require('mongoose');

require('../connexion')

const schema = mongoose.Schema({
    
    nom_certification: { type: String, required: true },
    _id: { type: String, required: true},
});

module.exports = mongoose.model('certification',schema);
