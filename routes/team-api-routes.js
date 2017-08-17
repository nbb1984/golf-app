var db = require("../models");

module.exports = function(app) {
  
  app.get("/api/teams", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Team.findAll({
      include: [db.Player]
    }).then(function(dbTeam) {
      res.json(dbTeam);
    });
  });

  app.get("/api/teams/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Team.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Player]
    }).then(function(dbTeam) {
      res.json(dbTeam);
    });
  });

  app.post("/api/teams", function(req, res) {
    db.Team.create(req.body).then(function(dbTeam) {
      res.json(dbTeam);
      console.log(res.json(dbTeam));
    });
  });

  app.delete("/api/teams/:id", function(req, res) {
    db.Team.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbTeam) {
      res.json(dbTeam);
    });
  });
};