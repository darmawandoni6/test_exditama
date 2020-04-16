//instantiate express module
const express = require("express");
const bodyParser = require("body-parser");
require("express-group-routes");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

//route
const club = require("./controlers/Club");
const recordgame = require("./controlers/RecordGame");

app.group("/football", (router) => {
  router.post("/club", club.createClub);
  router.get("/leaguestanding", club.getClub);
  router.get("/rank", club.findClub);
  router.post("/recordgame", recordgame.createGame);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
