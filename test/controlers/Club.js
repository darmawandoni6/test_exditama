const response = require("../helpers/responSuccess");
const responseError = require("./../helpers/responError");
const Club = require("../models").CLUB;
const { Sequelize } = require("sequelize");

exports.createClub = async (req, res) => {
  try {
    const result = await Club.create(req.body);
    res.status(200).json(response(result));
  } catch (error) {
    if (error.name) return res.status(200).json(responseError(400, error.name));
    return res.status(200).json(responseError(400, error.toString()));
  }
};

exports.getClub = async (req, res) => {
  try {
    const result = await Club.findAll({
      attributes: ["NAME", "POINTS"],
      order: [
        ["POINTS", "DESC"],
        ["PLAY", "DESC"],
      ],
    });
    res.status(200).json(response(result));
  } catch (error) {
    if (error.name) return res.status(200).json(responseError(400, error.name));
    return res.status(200).json(responseError(400, error.toString()));
  }
};

exports.findClub = async (req, res) => {
  try {
    const param = req.query;
    const result = await Club.findAll({
      attributes: [
        "NAME",
        [Sequelize.literal("(RANK() OVER (ORDER BY POINTS DESC))"), "standing"],
      ],
    });
    for (let i = 0; i <= result.length - 1; i++) {
      if (result[i].NAME == param.clubname) {
        res.status(404).json(responseError(result[i]));
      }
    }
    res.status(200).json(responseError(404));
  } catch (error) {
    if (error.name) return res.status(200).json(responseError(400, error.name));
    return res.status(200).json(responseError(400, error.toString()));
  }
};
