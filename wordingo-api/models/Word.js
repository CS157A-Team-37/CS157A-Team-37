"use strict";
module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define(
    "Word",
    {
      name: DataTypes.STRING,
      syllables: DataTypes.STRING,
      phoneticSpelling: DataTypes.STRING
    },
    {}
  );
  Word.associate = function(models) {
    // Word hasMany Definitions
    Word.hasMany(models.Definition);
    Word.hasMany(models.Category);
    // Word.belongsToMany(models.Category, { through: "categoryOfWord" });
  };
  return Word;
};
