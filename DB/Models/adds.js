let mongoose = require("mongoose");

let addsStructure = mongoose.Schema({
  title: String,
  price: String,
  quantity: Number,
  image: String,
  category: String,
  description: String,
  rating: Object,
});
let Adds = mongoose.model("Adds", addsStructure);
module.exports = Adds;
