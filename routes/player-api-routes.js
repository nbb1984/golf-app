var db = require("../models");

module.exports = function(app) {
  app.get("/api/players", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Player.findAll({
      include: [db.Team]
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
  app.get("/api/players/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Player.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Team]
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
  app.post("/api/players", function(req, res) {
    db.Player.create(req.body).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
  app.delete("/api/players/:id", function(req, res) {
    db.Player.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbPlayer) {
      res.json(dbPlayer);
    });
  });
};