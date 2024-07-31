const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/shoestore") //  connect to our database
    .then((connection) => { // After connecting to database
        console.log("Connected to the database!");

    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    })

module.exports = mongoose;
