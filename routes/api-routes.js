var db = require("../models");

// Routes =============================================================
module.exports = function(app) {

 
//
  // POST for a new game. Adds Admin
    app.post("/api/newGame", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Game.create({
            course_name: req.body.courseName,
            address: req.body.address,
            date: req.body.date,
            time: req.body.time,
            course_name: req.body.course_name

            // promise
        }).then(function(dbGame) {
            //once game is posted, post to player db
            db.Player.create({
                player_name: req.body.player_name,
                email: req.body.email,
                password: req.body.password
                // team: req.body.Team_Name


            }).then(function(dbPlayer) {

                db.Team.create({
                    team_name: req.body.team_name


                }).then(function(dbTeam) {
                    db.Player_To_Game.create({
                        gameId: dbGame.Id,
                        PlayerId: dbPlayer.Id,
                        admin: true


                    }).then(function(dbP2G) {
                        res.json({ dbP2G, dbTeam, dbPlayer, dbGame });
                    }).catch(function(error) {
                        res.send(error);
                    });
                });
            });

        });
    });

// joinGame GETS all the games from the game table, and PUTS the new player onto the player table
  app.get("/api/joinGame", function(req, res) {
    db.Game.findAll({
       include: [db.Team]
    }).then(function(dbGame) {
      res.json(dbGame);
    });



  });

  app.post("/api/joinGame", function(req, res) {

    db.Player.create({
      player_name: req.body.player_name,
      email: req.body.email,
      password: req.body.password,
      team: req.body.team
    }).then(function(dbPlayer) {

          db.PlayerToGame.create({})
          .then(function(dbPlayerToGame) {
              res.json(dbPlayer);
          })


    }).catch(function(error) {
      res.send(error);
    });
  });


// GETS users for handling log-in info. // may have to be restructured.
//where do we insert the if statement to see if the username and pword match?
  app.get("/api/login", function(req, res) {

      var username;

     if (req.query.player_name) {
       username.player_name = req.query.player_name;
     }

    db.Player.findOne({
      where: {
        name: req.params.name,
        password: req.params.password
      }
    })

    .then(function(dbPlayer) {
        var gameID;
        var playerID;

//How do I get the playerID and GameID set to values that I have pulled from the db?
        
        db.Game.findOne({
          where: {
            name: req.params.name,
          }, 

          include: [
                {
                  model: db.PlayerToGame,
                  include: [
                    {
                      model: db.Game
                    }
                  ]
                }
              ]
        }).then(function(dbPlayer) {
          if (true) {
             return res.redirect("/game/" + gameID + "/player/" + playerID);
          }
          res.json(dbPlayer);
        });      
    })

  });


// GETing specific info about a game.
  app.get("/game/:gameID/player/:playerID", function(req, res) {
    db.Game.findOne({
      where: {
        ID: req.params.gameID
      },

      include: [
        {
          model: db.Team,
        }
      ]
    }).then(function(dbGame) {
      res.json(dbGame);
    });

    db.PlayerToGame.findAll({
      where: {
        GameID: req.params.gameID
      }
    }).then(function(dbPlayerToGame) {
      res.json(dbPlayerToGame);
    });

    
  });

app.get("/game/:gameID/player/:playerID", function(req, res) {
  //Do we want to use gameID to get the game?
  db.PlayerToGame.findAll({
      where: {
        GameID: req.params.gameID,
        include: [
              {
                model: db.Player,
                include: [
                  {
                    model: db.Team
                  }
                ]
              }
            ] 
        }     
    }).then(function(dbPlayerToGame) {
      res.json(dbPlayerToGame);
    });
});

 //Can I do an update here?  
app.post("/api/enterscore", function(req, res) {
  var scoreOfHole = {}
  scoreOfHole[req.body.hole] = req.body.score;  
  db.PlayerToGame.update(scoreOfHole).then(function(dbPlayerToGame) {

      res.json(dbPlayerToGame);
    }).catch(function(error) {
      res.send(error);
    });
});




}

 // include: [
 //        {
 //          model: db.posts,
 //          include: [
 //            {
 //              model: db.comments
 //            }
 //          ]
 //        }
 //      ]