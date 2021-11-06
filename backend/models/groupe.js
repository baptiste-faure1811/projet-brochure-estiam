
const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const groupeSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    totalECTS: {
        type: Number,
        required: true
    },
    totalDuration: {
        type: Number,
        required: true
    },
    uniteEnseignement: {
        type: [ObjectId],
        required: true,
        default: []
    },
});

module.exports = mongoose.model('Groupe', groupeSchema);