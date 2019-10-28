// const Sequelize = require("sequelize");
// const db = require("../database/db.js");
// // import both models that is in relationship
// const User = require("./User")
// const Definition = require("./Definition")


// var MadeDefinition = db.sequelize.define(
//   "tbl_madeDefinition",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true
//     },
//     user_username: {
//       type: Sequelize.STRING,

//       references: {
//         model: User,
//         key: 'username'
//       }
//     },
//     definition_id: {
//       type: Sequelize.STRING,

//       references: {
//         model: Definition,
//         key: 'id'
//       }
//     },
    
//   },
//   {
//     timestamps: false
//   }
// );

// MadeDefinition.sync({ alter: true });

// module.exports = MadeDefinition;
