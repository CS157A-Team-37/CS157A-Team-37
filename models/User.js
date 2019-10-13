const Sequelize = require("sequelize");
const db = require("../database/db.js");

//Create a user table. For now it is not working 

var User = db.sequelize.define(
  "User",
  {
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

Word.sync({ alter: true });

module.exports = User;
