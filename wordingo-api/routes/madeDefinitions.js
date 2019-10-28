// var express = require("express");
// var router = express.Router();

// const cors = require("cors");
// const MadeDefinition = require("../models/MadeDefinition");

// router.use(cors());

// router.get("/madeDefinitions", function(req, res, next) {
//   MadeDefinition.findAll()
//     .then(madeDefinitions => {
//       res.json(madeDefinitions);
//     })
//     .catch(err => {
//       res.send("error: " + err);
//     });
// });

// // router.post("/madeDefinitions", function(req, res, next) {
// //   if (!req.body.user_username || !req.body.definition_id || !datePosted) {
// //     res.status(400);
// //     res.json({ error: "Bad Data" });
// //   } 
// //   else {
// //     MadeDefinition.create(req.body)
// //       .then(data => {
// //         res.send(data);
// //       })
// //       .catch(err => {
// //         res.json("error: " + err);
// //       });
// //   }
// // });

// module.exports = router;