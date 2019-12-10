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
//req.params.word_id
// GET Definitions for a certain word
router.get("/definitions/word-:word_id", function(req, res, next) {
  console.log("got here!");
  console.log("word id:" + req.params.word_id +"/");
  var con = String(req.params.word_id);
  console.log("word id:" + con +"/");
  Definition.findAll({
    where: {
      wordID: req.params.word_id
    }
  })
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

router.put("/definitions/update", function (req, res, next) {
  console.log("Here in update");
  console.log("text in update:" + req.body.text );
  console.log("text in update:" + req.body.numberOfUpvotes );
  Definition.update(
    {numberOfUpvotes: req.body.numberOfUpvotes,
    numberOfDownvotes: req.body.numberOfDownvotes},{where: {text: req.body.text} }
  )
  .then(function(rowsUpdated) {
    res.json(rowsUpdated)
  })
  .catch(next)
 })

 router.put("/definitions/textupdate", function (req, res, next) {
  console.log("Here in update");
  console.log("text in update:" + req.body.text );
  console.log("text in update:" + req.body.id );
  Definition.update(
    {text: req.body.text},{where: {id: req.body.id} }
  )
  .then(function(rowsUpdated) {
    res.json(rowsUpdated)
  })
  .catch(next)
 })

 router.delete("/definitions/delete", function (req, res, next) {
  console.log("Here in update");
  console.log("text in update:" + req.body.text );
  console.log("text in update:" + req.body.numberOfUpvotes );
  Definition.destroy(
    {where: {text: req.body.text} }
  )
  .then(function(rowsUpdated) {
    res.json(rowsUpdated)
  })
  .catch(next)
 })

module.exports = router;
