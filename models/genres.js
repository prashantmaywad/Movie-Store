var mongoose = require("mongoose");

var Genere = mongoose.model(
  "genres",
  new mongoose.Schema({
    name: String,
  })
);
module.exports = Genere;
