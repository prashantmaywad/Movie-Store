var express = require("express");
var router = express.Router();
var Movies = require("../models/movies");
var Genere = require("../models/genres");

router.get("/", async (req, res) => {
  var movies = await Movies.find();
  res.send(movies);
  res.status(200);
});
router.get("/:name", async (req, res) => {
  if (!req.params.name) return res.status(400).send("genre id is emplty");

  var movies = await Movies.find({ genre: req.params.name });
  res.send(movies);
  res.status(200);
});

router.post("/", async (req, res) => {
  if (!req.body.name)
    return res.status(400).send("Please send Name and Genre of Movie");
  if (!req.body.genre)
    return res.status(400).send("Please Enter Genre of Movie");

  var movies = await Movies.find({ name: req.body.name });
  if (movies && movies.length > 0)
    return res.status(400).send("Movie Already exist");
  // var genre = await Genere.findById(req.body.genre.id);
  // if (!genre) return res.status(400).send("Invalid Genre");
  const { name, image, description, genre, releaseDate } = req.body;
  movies = new Movies({
    name,
    description,
    image,
    genre,
    releaseDate,
  });
  movies.save();
  res.send(movies);
  res.status(200);
});
module.exports = router;
