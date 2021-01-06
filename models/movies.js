var mongoose = require("mongoose");

var Movies = mongoose.model(
  "movies",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      minlength: 5,
      maxlength: 255,
    },
    genre: {
      type: String,
    },
    releaseDate: {
      type: Date,
    },
  })
);

module.exports = Movies;
