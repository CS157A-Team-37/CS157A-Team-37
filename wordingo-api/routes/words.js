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

router.post("/words/add", function(req, res, next) {
  console.log("req.body.name: " + req.body.name);
  console.log("req.body: " + req.body);
  console.log("req.method: " + req.method);
  if (!req.body.name || !req.body.syllables || !req.body.phoneticSpelling) {
    res.status(400);
    
    res.json({ error: "Bad Data-o" });
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
