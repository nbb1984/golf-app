var db = require("../models");

module.exports = function(app) {
  app.get("/api/players_to_game", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Player_To_Game.findAll({
    }).then(function(dbPlayer_To_Game) {
      res.json(dbPlayer_To_Game);
    });
  });
  app.get("/api/players_to_game/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Player_To_Game.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbPlayer_To_Game) {
      res.json(dbPlayer_To_Game);
    });
  });
  app.post("/api/score_update/:id", function(req, res) {
    db.Player_To_Game.create({
      var holeNumber = req.params.id,
      holeNumber: req.body.score
      
    }).then(function(dbPlayer_To_Game) {
      res.json(dbPlayer_To_Game);
    });
  });
  app.delete("/api/players_to_game/:id", function(req, res) {
    db.Player_To_Game.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPlayer_To_Game) {
      res.json(dbPlayer_To_Game);
    });
  });
};