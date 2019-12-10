var express = require("express");
var router = express.Router();

const cors = require("cors");
const Users = require("../models").User;

router.use(cors());

router.get("/users", function(req, res, next) {
  Users.findAll()
    .then(users => {
      console.log("here in users");
      res.json(users);
    })
    .catch(err => {
      res.send("error: " + err);
    });
});

router.post("/users/add", function(req, res, next) {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.status(400);
    res.json({ error: "Bad Data2" });
  } else {
    Users.create(req.body)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.json("error: " + err);
      });
  }
});

module.exports = router;
