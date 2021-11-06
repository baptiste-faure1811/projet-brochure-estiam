
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
    cours: {
        type: [ObjectId],
        required: true,
        default: []
    },
});

module.exports = mongoose.model('Domaine', domaineSchema);