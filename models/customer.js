var mongoose = require("mongoose");

var Customer = mongoose.model(
  "customer",
  new mongoose.Schema({
    name: {
      type: String,
      requires: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    joiningDate: {
      type: Date,
    },
  })
);
module.exports = Customer;
