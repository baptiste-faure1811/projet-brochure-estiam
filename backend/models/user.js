
const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: {
        type: ObjectId,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);