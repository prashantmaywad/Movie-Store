var mongoose = require("mongoose");

var Users = mongoose.model(
  "user",
  new mongoose.Schema({
    name: {
      type: String,
      requires: true,
      minlength: 5,
      maxlength: 50,
    },
    email: {
      type: String,
      requires: true,
      minlength: 5,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      requires: true,
      minlength: 5,
      maxlength: 1024,
    },
    joiningDate: {
      type: Date,
    },
    IsAdmin: {
      type: Boolean,
      default: false,
    },
  })
);

module.exports = Users;
