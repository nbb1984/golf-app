// Routes =============================================================
var db = require("../models/index.js");

module.exports = function(app) {


    //
    // POST for a new game. Adds Admin
    app.post("/api/newGame", function(req, res) {

      console.log("\n\n\n>>>>");
      console.log(req.body);
      console.log("\n\n\n>>>>");
      
        // findAll returns all entries for a table when used with no options
        db.Game.create({
            course_name: req.body.coursename,
            date: req.body.date,
            time: req.body.time

            // promise
        }).then(function(dbGame) {
            //once game is posted, post to player db
            db.Player.create({
                player_name: req.body.PlayerName,
                email: req.body.Email,
                password: req.body.Password
                team: req.body.teamname


            }).then(function(dbPlayer) {

                db.Team.create({
                    team_name: req.body.team_name


                }).then(function(dbTeam) {
                    db.Player_To_Game.create({
                        gameId: dbGame.Id,
                        PlayerId: dbPlayer.Id,
                        admin: true


                    }).then(function(result) {
                        db.Game.findOne({
                            where: {
                                id: dbPlayer.Id
                            }
                        })
                        var gameId = dbGame.Id;
                        var playerId = dbPlayer.Id;
                        if (gameId && playerId) {
                            res.redirect("/game/" + gameId + "/player/" + playerId)
                        }
                            res.json(dbPlayer);
                        });.then(function(dbP2G) {
                            res.json({ dbP2G, dbTeam, dbPlayer, dbGame });
                            res.redirect()
                        }).catch(function(error) {
                            res.send(error);
                        });
                });
            });

        });
    });


    // res.json({dbGame, dbPlayer});
    //       }).catch(function(error) {
    //         res.send(error);

    app.get("/api/joinGame", function(req, res) {
        db.Game.findAll({
            //include: [db.Team]
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

            res.json(dbPlayer);
        }).catch(function(error) {
            res.send(error);
        });
    });


    // GETS users for handling log-in info. // may have to be restructured.
    app.get("/api/login", function(req, res) {

        db.Player.findOne({
            where: {
                name: req.body.name,
                password: req.body.password,
            }
        }).then (function(dbPlayer) {



        db.Game.findOne({
            where: {
                id: req.params.id
            },

        }).then(function(dbPlayer) {
            var gameid = db.Player_To_Game;
            var playerid = ;
            if (username) {
                res.redirect("/game/" + gameid + "/player/" + playerid)
            }

            res.json(dbPlayer);
        });
    });


    // GETing specific info about a game.
    app.get("/game/:gameID/player/:playerID", function(req, res) {
        db.Game.findOne({
            where: {
                ID: req.params.gameID
            },
            include: [{
                model: db.Team
            }]
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

    //
    app.get("/find/game/:gameID/player/:playerID", function(req, res) {
        db.Player_To_Game.findAll({
            include: db.Player,
            include: db.Team,
            where: {
                GameID: req.params.gameID
            }
        }).then(function(dbPlayerToGame) {
            res.json(dbPlayerToGame);
        });
    });

    app.post("/api/enterscore/:hole", function(req, res) {
        var scoreOfHole = {}
        scoreOfHole[req.body.hole] = req.body.score;
        db.PlayerToGame.update(scoreOfHole).then(function(dbPlayerToGame) {

            res.json(dbPlayerToGame);
        }).catch(function(error) {
            res.send(error);
        });

    });




}
