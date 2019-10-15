const Sequelize = require("sequelize");
const db = require("../database/db.js");

var Word = db.sequelize.define(
  "tbl_word",
  {
    name: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    syllables: {
      type: Sequelize.STRING
    },
    phoneticSpelling: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

Word.sync({ alter: true });

module.exports = Word;
