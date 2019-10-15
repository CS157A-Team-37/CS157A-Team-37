const Sequelize = require("sequelize");
const db = require("../database/db.js");

var User = db.sequelize.define(
  "tbl_user",
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

User.sync({ alter: true });

module.exports = User;
