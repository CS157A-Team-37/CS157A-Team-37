const Sequelize = require("sequelize");
const db = require("../database/db.js");

var Category = db.sequelize.define(
  "tbl_category",
  {
    name: {
      type: Sequelize.STRING,
      primaryKey: true,
    }
  },
  {
    timestamps: false
  }
);

Category.sync({ alter: true });

module.exports = Category;
