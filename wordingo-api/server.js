// Importing some dependencies
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var models = require("./models");

// Importing routes
// var index = require("./routes/index");
var words = require("./routes/words");
var definitions = require("./routes/definitions");
var users = require("./routes/users");
var categories = require("./routes/categories");

var app = express();
app.use(cors());

//Body Parser stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
//app.use("/", index);
app.use("/api", words);
app.use("/api", definitions);
app.use("/api", users);
app.use("/api", categories);

var port = 5000;
app.listen(port, function() {
  console.log("Wordingo API running on port 5000...");
});
