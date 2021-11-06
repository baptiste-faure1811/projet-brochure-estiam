
const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const coursSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ECTSCredit: {
        type: Number,
        required: true
    },
    ECTSCode: {
        type: String,
        required: true
    },
    oldCode: {
        type: String,
        required: true
    },
    semestre: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Cours', coursSchema);