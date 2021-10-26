
const mongoose = require('mongoose');

var db = mongoose
    .connect(
        `${process.env.MONGO_DB_URL}`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => {
        console.log("Success")
    })
    .catch((err) => console.log(`Could not connect to database server`, err));

module.exports = db;