var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var Genere = require("../models/genres");

router.get("/", async (req, res) => {
  var genre = await Genere.find();
  res.status(200);
  res.send(genre);
});

router.post("/", async (req, res) => {
  if (!req.body.name) return res.status(400).send("Name Require");
  var genre = await Genere.find({ name: req.body.name });
  if (genre.length > 0) return res.status(400).send("Genre Already Exist");

  genre = new Genere({
    name: req.body.name,
  });
  var saved = await genre.save();

  res.send(saved);
  res.status(200);
});

router.delete("/:id", async (req, res) => {
  if (!req.params.id)
    return res.status(400).send("Enter id for the Genre to delete");

  var genre = await Genere.findByIdAndDelete(req.params.id);
  res.send(genre);
  res.status(200);
});

router.delete("/", async (req, res) => {
  if (!req.body.name)
    return res.status(400).send("Enter Name for the Genre to delete");

  var genre = await Genere.findOneAndDelete({ name: req.body.name });
  res.send(genre);
  res.status(200);
});
module.exports = router;
