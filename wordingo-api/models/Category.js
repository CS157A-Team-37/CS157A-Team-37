"use strict";

module.exports = (sequelize, DataTypes) => {
  // require("./Word");
  // require(sequelize);
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING,
      wordID: DataTypes.INTEGER
    },
    {}
  );
  Category.associate = function(models) {
    // Categories belongToMany Words
    // Category.belongsToMany(models.Word, { through: "categoryOfWord" });
  };
  return Category;
};
