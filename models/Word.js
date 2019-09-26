const Sequelize = require("sequelize");
const db = require("../database/db.js");

var Word = db.sequelize.define(
  "tbl_word",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    word_name: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  }
);

Word.sync({ alter: true });

module.exports = Word;
