"use strict";
module.exports = (sequelize, DataTypes) => {
  const CLUB = sequelize.define(
    "CLUB",
    {
      NAME: DataTypes.STRING,
      PLAY: DataTypes.INTEGER,
      WIN: DataTypes.INTEGER,
      DRAW: DataTypes.INTEGER,
      LOSE: DataTypes.INTEGER,
      POINTS: DataTypes.INTEGER,
    },
    {}
  );
  CLUB.associate = function (models) {
    // associations can be defined here
  };
  return CLUB;
};
