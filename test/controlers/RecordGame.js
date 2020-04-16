const response = require("../helpers/responSuccess");
const responseError = require("./../helpers/responError");
const RecordGame = require("../models").RECORD_GAME;
const Club = require("../models").CLUB;

exports.createGame = async (req, res) => {
  try {
    const result = await RecordGame.create(req.body);
    if (result) {
      const idHome = result.ID_CLUB_HOME;
      const idAway = result.ID_CLUB_AWAY;

      const play = await Club.findAll({ where: { id: [idHome, idAway] } });
      if (play) {
        //home win
        if (result.SCORE_HOME > result.SCORE_AWAY) {
          const win = {
            PLAY: play[0].PLAY + 1,
            WIN: play[0].WIN + 1,
            POINTS: play[0].WIN + 3,
          };
          const lose = {
            LOSE: play[1].LOSE + 1,
            PLAY: play[1].PLAY + 1,
          };
          //update poin home
          await Club.update(win, {
            where: {
              id: play[0].id,
            },
          });
          //update poin away
          await Club.update(lose, {
            where: {
              id: play[1].id,
            },
          });
        } // away win
        else if (result.SCORE_HOME < result.SCORE_AWAY) {
          const win = {
            PLAY: play[1].PLAY + 1,
            WIN: play[1].WIN + 1,
            POINTS: play[1].WIN + 3,
          };
          const lose = {
            LOSE: play[0].LOSE + 1,
            PLAY: play[0].PLAY + 1,
          };
          //update poin home
          await Club.update(lose, {
            where: {
              id: play[0].id,
            },
          });
          //update poin away
          await Club.update(win, {
            where: {
              id: play[1].id,
            },
          });
        } //draw
        else {
          const draw = {
            PLAY: play[0].PLAY + 1,
            DRAW: play[0].DRAW + 1,
            POINTS: play[0].WIN + 1,
          };
          await Club.update(draw, {
            where: {
              id: [play[0].id, play[1].id],
            },
          });
        }
      }
      res.status(200).json(response());
    }
  } catch (error) {
    if (error.name) return res.status(200).json(responseError(400, error.name));
    return res.status(200).json(responseError(400, error.toString()));
  }
};
