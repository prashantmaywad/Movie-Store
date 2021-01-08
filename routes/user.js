var express = require("express");
var router = express();
var Users = require("../models/users");
var _ = require("underscore");

router.get("/", async (req, res) => {});
router.post("/", async (req, res) => {
  var { name, email, password } = req.body;
  if (name === "" || email === "")
    return res.status(400).send("email or name empty");
  var user = await Users.findOne({ email: email });

  if (user) return res.status(400).send("User already Exist");

  user = await Users({
    name,
    email,
    password,
    joiningDate: new Date(),
    IsAdmin: false,
  });
  var newUser = await user.save();
  return res.status(200).send(newUser);
});
module.exports = router;
