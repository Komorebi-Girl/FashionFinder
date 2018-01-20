
// Dependencies
var express = require("express");
var apiRoutes = require("./app/routing/apiRoutes.js");
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var bodyParser = require("body-parser");
var path = require("path");

// Setting up Express App
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var scores = [];


apiRoutes(app);
htmlRoutes(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



