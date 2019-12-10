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


router.get("/words/:word_name", function(req, res, next) {
  console.log("reached wordq");
  Word.findAll({
    where: {
      name: req.params.word_name
    }
  })
    .then(word => {
      res.json(word);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.get("/wordsgetid/:wordID", function(req, res, next) {
  console.log("reached wordsgetid");
  Word.findAll({
    where: {
      id: req.params.wordID
    }
  })
    .then(word => {
      console.log("reached word");
      console.log("name of word:" + word[0].name);
      res.json(word);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.post("/words/add", function(req, res, next) {
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

router.delete("/words/delete", function (req, res, next) {
  console.log("reached delete");
  Word.destroy(
    {where: {name: req.body.name, id: req.body.wordID} }
  )
  .then(function(rowsUpdated) {
    res.json(rowsUpdated)
  })
  .catch(next)
 })

module.exports = router;
