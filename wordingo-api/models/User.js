const Sequelize = require("sequelize");
// const Model = Sequelize.Model;
const db = require("../database/db.js");

//importing needed models
const Definition = ("./Definition.js");

// class User extends Model {}
// User.init({
//   username: {
//     type: Sequelize.STRING,
//     primaryKey: true
//   },
//   email: {
//     type: Sequelize.STRING
//   },
//   password:{
//     type: Sequelize.STRING
//   }
// }, 
// {
//   sequelize,
//   modelName: 'user'
// });

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

// User.hasMany(Definition);

User.sync({ alter: true });

module.exports = User;
