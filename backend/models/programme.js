
const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const programmeSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    totalDuration: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Programme', programmeSchema);