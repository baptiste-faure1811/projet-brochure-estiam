
const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const domaineSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    groupe: {
        type: ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Domaine', domaineSchema);