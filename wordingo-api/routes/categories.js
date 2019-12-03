var express = require("express");
var router = express.Router();

const cors = require("cors");
const Category = require("../models").Category;

router.use(cors());

router.get("/categories", function(req, res, next) {
  Category.findAll()
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.post("/categories/add", function(req, res, next) {
  if (!req.body.name || !req.body.wordID) {
    res.status(400);
    res.json({ error: "Bad Data" });
  } else {
    Category.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

module.exports = router;
