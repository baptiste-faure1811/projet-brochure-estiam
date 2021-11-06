
const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const uniteEnseignementSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    totalDuration: {
        type: Number,
        required: true
    },
    domaines: {
        type: [ObjectId],
        required: true,
        default: []
    },
});
module.exports = mongoose.model('unite_enseignements', uniteEnseignementSchema,'unite_enseignements');