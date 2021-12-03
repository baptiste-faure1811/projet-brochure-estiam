const mongoose = require('mongoose');

var db = mongoose
    .connect(
        `mongodb+srv://ESTIAM-brochure:ESTIAM-brochure@cluster0.i47bo.mongodb.net/projet-brochure?retryWrites=true&w=majority`,
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true
         }
    )
    .then(() => {
        console.log("Success")
    })
    .catch((err) => console.log(`Could not connect to database server`, err));

module.exports = db;