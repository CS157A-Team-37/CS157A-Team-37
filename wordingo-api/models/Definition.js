"use strict";
module.exports = (sequelize, DataTypes) => {
  const Definition = sequelize.define(
    "Definition",
    {
      text: DataTypes.STRING,
      numberOfUpvotes: DataTypes.INTEGER,
      numberOfDownvotes: DataTypes.INTEGER
    },
    {}
  );
  Definition.associate = function(models) {
    // Definition belongsTo Word
    Definition.belongsTo(models.Word);
    Definition.belongsTo(models.User);
  };
  return Definition;
};
