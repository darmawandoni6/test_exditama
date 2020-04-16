"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("RECORD_GAMES", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ID_CLUB_HOME: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CLUBS",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      ID_CLUB_AWAY: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "CLUBS",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      SCORE_HOME: {
        type: Sequelize.INTEGER,
      },
      SCORE_AWAY: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("RECORD_GAMEs");
  },
};
