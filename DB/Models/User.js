let mongoose = require("mongoose");

let userStructure = mongoose.Schema({
    Email: String,
    FullName: String,
    FirstName: String,
    LastName: String,
    Password: String,
    Cart: Array,
});

let User = mongoose.model("User", userStructure);

module.exports = User;
