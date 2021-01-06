var express = require("express");
var genres = require("./routes/genres");
var movies = require("./routes/movies");
var customer = require("./routes/customer");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");

mongoose
  .connect("mongodb://localhost/videly", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to Mongo"))
  .catch((ex) => console.log(ex));
var app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use("/api/genres", genres);
app.use("/api/movies", movies);
app.use("/api/customer", customer);

var port = process.env.port || 5000;
app.listen(port, () => console.log(`listening on Port number ${port}`));
