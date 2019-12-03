var express = require("express");
var router = express.Router();

const cors = require("cors");
const Definition = require("../models").Definition;

router.use(cors());

router.get("/definitions", function(req, res, next) {
  Definition.findAll()
    .then(definitions => {
      res.json(definitions);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.post("/definitions/add", function(req, res, next) {
  if (
    !req.body.text ||
    !req.body.numberOfUpvotes ||
    !req.body.numberOfDownvotes ||
    !req.body.wordID ||
    !req.body.userID
  ) {
    res.status(400);
    res.json({ error: "Bad Data" });
  } else {
    Definition.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

module.exports = router;
