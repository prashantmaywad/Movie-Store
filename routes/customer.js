var express = require("express");
var router = express();
var Customer = require("../models/customer");
var _ = require("underscore");

router.get("/", async (req, res) => {
  var customer = await Customer.find().sort({ name: 1 });
  if (!customer) return res.status(200).send("No Customer Exist");
  var newCustomer = [];
  customer.forEach((element) => {
    newCustomer.push(_.pick(element, ["name", "email", "_id"]));
  });
  return res.status(200).send(newCustomer);
});
router.post("/", async (req, res) => {
  var { name, email, password } = req.body;
  if (!name || !email) return res.status(400).send("Name or Email is empty");
  var customer = await Customer({
    name,
    email,
    password,
    joiningDate: new Date(),
  });
  var newCustomer = await customer.save();
  return res.status(200).send(newCustomer);
});
module.exports = router;
