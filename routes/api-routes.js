// Routes =============================================================
module.exports = function(app) {

var db = require("../models")
//
  // POST for a new game. Adds Admin
  app.post("/api/newGame", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Game.create({
      holes_played: req.body.holes_played,
      course_name: req.body.course_name,
      // password: req.body.password
    }).then(function(dbGame) {

      db.Player.create({
        player_name: req.body.player_name,
        email: req.body.email,
        password: req.body.password,
        team: req.body.team
      }).then(function(dbPlayer) {

          res.json({dbGame, dbPlayer});
        }).catch(function(error) {
          res.send(error);
        });
    });
  });

// joinGame GETS all the games from the game table, and PUTS the new player onto the player table
  app.get("/api/joinGame", function(req, res) {
    db.Game.findAll({}).then(function(dbGame) {
      res.json(dbGame);
    });


  });
//not working
  app.post("/api/joinGame", function(req, res) {

    db.Player.create({
      player_name: req.body.player_name,
      email: req.body.email,
      password: req.body.password,
      team: req.body.team
    }).then(function(dbPlayer) {

      res.json(dbPlayer);
    }).catch(function(error) {
      res.send(error);
    });
  });


// GETS users for handling log-in info. // may have to be restructured.
  app.get("/api/login", function(req, res) {

    var username = {};

    if (req.query.player_name) {
      username.player_name = req.query.player_name;
    }

    db.Player.findAll({
      where: username
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });


// GETing specific info about a game.
  app.get("/game/:gameID/player/:playerID", function(req, res) {
    db.Game.findOne({
      where: {
        ID: req.params.gameID
      }
    }).then(function(dbGame) {
      res.json(dbGame);
    });

    db.Player_To_Game.findAll({
      where: {
        GameID: req.params.gameID
      }
    }).then(function(dbPlayerToGame) {
      res.json(dbPlayerToGame);
    });

    
  });

app.get("/game/:gameID/player/:playerID", function(req, res) {
  db.Player_To_Game.findAll({
      where: {
        GameID: req.params.gameID
      }
    }).then(function(dbPlayerToGame) {
      res.json(dbPlayerToGame);
    });
});

app.post("/api/enterscore", function(req, res) {
  db.Player_To_Game.create({
     hole1: req.body.hole1,
     hole2: req.body.hole2,
     hole3: req.body.hole3,
     hole4: req.body.hole4,
     hole5: req.body.hole5,
     hole6: req.body.hole6,
     hole7: req.body.hole7,
     hole8: req.body.hole8,
     hole9: req.body.hole9,
     hole10: req.body.hole10,
     hole11: req.body.hole11,
     hole12: req.body.hole12,
     hole13: req.body.hole13,
     hole14: req.body.hole14,
     hole15: req.body.hole15,
     hole16: req.body.hole16,
     hole17: req.body.hole17,
     hole18: req.body.hole18

   }).then(function(dbPlayer) {

      res.json(dbPlayer);
    }).catch(function(error) {
      res.send(error);
    });
});




}