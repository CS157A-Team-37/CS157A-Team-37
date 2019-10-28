const Sequelize = require("sequelize");
const db = require("../database/db.js");

var Definition = db.sequelize.define(
  "tbl_definition",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    numberOfUpvotes: {
      type: Sequelize.INTEGER
    },
    numberOfDownvotes: {
      type: Sequelize.INTEGER
    },
    text: {
        type: Sequelize.STRING(2000)
    }
  },
  {
    timestamps: false
  }
);

Definition.sync({ alter: true });

module.exports = Definition;
