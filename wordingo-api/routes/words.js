var express = require("express");
var router = express.Router();

const cors = require("cors");
const Word = require("../models").Word;

router.use(cors());

router.get("/words", function(req, res, next) {
  Word.findAll()
    .then(words => {
      res.json(words);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.post("/words", function(req, res, next) {
  if (!req.body.name || !req.body.syllables || !req.body.phoneticSpelling) {
    res.status(400);
    res.json({ error: "Bad Data" });
  } else {
    Word.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

module.exports = router;
