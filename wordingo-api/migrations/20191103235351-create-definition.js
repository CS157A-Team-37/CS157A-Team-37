"use strict";

const models = require("../models");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("definitions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.STRING
      },
      numberOfUpvotes: {
        type: Sequelize.INTEGER
      },
      numberOfDownvotes: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      wordID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "words"
          },
          key: "id"
        },
        allowNull: false
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users"
          },
          key: "id"
        },
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("definitions");
  }
};
