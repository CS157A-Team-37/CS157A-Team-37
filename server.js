var express = require("express");
var bodyParser = require("body-parser");

var index = require("./routes/index");
var words = require("./routes/words");
var users = require("./routes/users");
var cors = require("cors");

var port = 5000;

var app = express();
app.use(cors());

//Body Parser stuff
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use("/", index);
app.use("/api", words);
app.use("/api", users);

app.listen(port, function() {
  console.log("Wordingo API running on port 5000...");
});
