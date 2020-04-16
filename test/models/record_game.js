"use strict";
module.exports = (sequelize, DataTypes) => {
  const RECORD_GAME = sequelize.define(
    "RECORD_GAME",
    {
      ID_CLUB_HOME: DataTypes.INTEGER,
      ID_CLUB_AWAY: DataTypes.INTEGER,
      SCORE_HOME: DataTypes.INTEGER,
      SCORE_AWAY: DataTypes.INTEGER,
    },
    {}
  );
  RECORD_GAME.associate = function (models) {
    // associations can be defined here
  };
  return RECORD_GAME;
};
