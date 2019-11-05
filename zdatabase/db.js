const Sequelize = require("sequelize");
const db = {};
//! parameters are database name, username, password
const sequelize = new Sequelize("nodejs_words", "root", "Melee475433!", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
