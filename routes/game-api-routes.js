var db = require("../models");

module.exports = function(app) {
  app.get("/api/games", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Game.findAll({
      include: [db.Post]
    }).then(function(dbGame) {
      res.json(dbGame);
    }).catch(function(error) {
      res.send(error);
    });
  });

  app.get("/api/games/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Game.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.post("/api/newGame", function(req, res) {
    db.Game.create({
      Teams: req.body.teams,
      Course_Name: req.body.course_name,
      Date: req.body.date,
      Time: req.body.time
    }).then(function(dbGame) {
      res.json(dbGame);
    }).catch(function(error) {
      res.send(error);
    });;
  });

  app.post("/api/updateGame", function(req, res) {
    db.Game.create({
      Course_Name: req.body.course_name
    }).then(function(dbGame) {
      res.json(dbGame);
    }).catch(function(error) {
      res.send(error);
    });;
  });

  app.post("/api/completeGame", function(req, res) {
    db.Game.create({
      complete: req.body.complete
    }).then(function(dbGame) {
      res.json(dbGame);
    }).catch(function(error) {
      res.send(error);
    });;
  });

  // app.post("/create-player", function(req, res) {
  //   console.log("inside create post")
  //   // findAll returns all entries for a table when used with no options
  //   db.Player.create({
  //     name: req.body.name,
  //     email: req.body.email,
  //     password: req.body.password
  //   }).then(function(dbPlayer) {

  //     res.json(dbPlayer);
  //   }).catch(function(error) {
  //     res.send(error);
  //   });

  // });
  app.delete("/api/games/:id", function(req, res) {
    db.Game.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });
};