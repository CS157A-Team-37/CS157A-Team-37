var express = require("express");
var router = express.Router();
var Sequelize = require("sequelize");

const cors = require("cors");
const Category = require("../models").Category;


router.use(cors());

router.get("/categories", function(req, res, next) {
  Category.findAll({
    attributes: [
      [Sequelize.fn('DISTINCT', Sequelize.col('name')), 'name'],
    ],
  })
    .then(categories => {
      console.log("herein categories");
      res.json(categories);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.get("/categories/:categoryName", function(req, res, next) {
  Category.findAll( {where: {
    name: req.params.categoryName
  }})
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
