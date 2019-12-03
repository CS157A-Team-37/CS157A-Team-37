"use strict";

module.exports = (sequelize, DataTypes) => {
  // require("./Word");
  // require(sequelize);
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING
      // wordID: {
      //   type: Sequelize.INTEGER,

      //   references: {
      //     // This is a reference to another model
      //     model: Word,

      //     // This is the column name of the referenced model
      //     key: "id"
      //   }
      // }
    },
    {}
  );
  Category.associate = function(models) {
    // Categories belongToMany Words
    // Category.belongsToMany(models.Word, { through: "categoryOfWord" });
  };
  return Category;
};
