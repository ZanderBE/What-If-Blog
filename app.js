// Init Project Dependencies
const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      mongoose = require("mongoose"),
      methodOverride = require("method-override"),
      expressSanitizer = require("express-sanitizer"),
      dotenv = require('dotenv').config();

// App Config the for the Dependencies
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// Restful Routes
app.get("/", function(req, res) {
    res.render("/homepage");
  });

  // listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
  });
  