const User = require('../models/user');
const mongoose = require('mongoose');
const { ObjectId } = require('bson');
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const ENCRYPTION_KEY = Buffer.from('FoCKvdLslUuB4y3EZlKate7XGottHski1LmyqJHvUhs=', 'base64');
const IV_LENGTH = 16;


module.exports.checkUserCredentials = async (req, res) => {
    
    // Set headers
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader('Content-Type', 'application/json');

    // Check required parameters
    console.log(req.body.email)
    console.log(req.body.password)
    if (req.body.email == undefined || req.body.password == undefined) {
        res.status(500);
        const errorDescription = "Please provide all required parameters to log in as admin.";
        console.log(errorDescription);
        res.send(errorDescription);
        return;
    }
    const email = req.body.email;
    const password = req.body.password;
  
    // Get all groupes from database
    const user = await User.findOne({ email: email }).lean();
    if (user == undefined) {
        res.status(500);
        const errorDescription = "Invalid email or password.";
        console.log(errorDescription);
        res.send(errorDescription);
        return;
    }

    // Check password
    var decryptedPassword = decrypt(user.passwordHash);
    if (decryptedPassword == password) {
        res.status(200);
        res.send(JSON.stringify({authentification: true}));
        return;
    } else {
        res.status(500);
        const errorDescription = "Invalid email or password.";
        console.log(errorDescription);
        res.send(errorDescription);
        return;
    }
};

function encrypt(text) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}