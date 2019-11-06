"use strict";
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      name: DataTypes.STRING
    },
    {}
  );
  Category.associate = function(models) {
    // Categories belongToMany Words
    // Category.belongsToMany(models.Word, { through: "categoryOfWord" });
  };
  return Category;
};
