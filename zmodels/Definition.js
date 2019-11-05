const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const db = require("../zdatabase/db.js");

const sequelize = db.sequelize;

const User = require("./User");

// module.exports = (sequelize, DataTypes) => {
//   var Definition = sequelize.define("Definition", {
//     numberOfUpvotes: {
//       type: Sequelize.INTEGER
//     },
//     numberOfDownvotes: {
//       type: Sequelize.INTEGER
//     },
//     text: {
//       type: Sequelize.STRING(2000)
//     }
//   });

//   Definition.associate = function(models) {
//     models.Definition.belongsTo(models.User, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   Definition.sync({ alter: true });

//   return Definition;
// };

// module.exports = class Definition extends Model {};
// Definition.init(
//   {
//     numberOfUpvotes: {
//       type: Sequelize.INTEGER
//     },
//     numberOfDownvotes: {
//       type: Sequelize.INTEGER
//     },
//     text: {
//       type: Sequelize.STRING(2000)
//     }
//   },
//   {
//     sequelize,
//     modelName: "definition"
//   }
// );

var Definition = db.sequelize.define(
  "definition",
  {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
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

// Definition.belongsTo(User);

Definition.sync({ alter: true });

module.exports = Definition;
