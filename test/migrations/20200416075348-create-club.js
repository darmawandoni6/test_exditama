"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("CLUBS", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      NAME: {
        type: Sequelize.STRING,
      },
      PLAY: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      WIN: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      DRAW: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      LOSE: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      POINTS: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CLUBs");
  },
};
