// Routes =============================================================
var db = require("../models/index.js");

module.exports = function(app) {

    /// CREATE A NEW GAME
    app.post("/api/newGame", function(req, res) {

        // Log collected info from create game modal
        console.log("\n\n\n>>>>");
        console.log(req.body);
        console.log("\n\n\n>>>>");

        // Add info to game table
        db.Game.create({
            coursename: req.body.coursename,
            date: req.body.date,
            time: req.body.time

            // Add info to player table
        }).then(function(dbGame) {
            db.Player.create({
                playername: req.body.playername,
                email: req.body.email,
                password: req.body.password,
                teamname: req.body.teamname

                // Add info to player to game table
            }).then(function(dbPlayer) {
                db.PlayerToGame.create({
                    GameId: dbGame.id,
                    PlayerId: dbPlayer.id,
                    teamname: dbPlayer.teamname,
                    admin: true

                    // Redirect to dashboard url
                }).then(function(dbP2G) {
                    res.json({ dbP2G, dbTeam, dbPlayer, dbGame });
                    // res.redirect("/game/" + dbGame.id + "/player/" + dbPlayer.id)

                    // Error
                }).catch(function(error) {
                    res.send(error);
                });
            });
        });
    });


    /// FIND ALL GAMES
    app.get("/api/games", function(req, res) {
        db.Game.findAll({
            // include: [db.Team]
        }).then(function(dbGame) {
            res.json(dbGame);
        });
    });

    /// FIND ALL TEAMS
    app.get("/api/teams", function(req, res) {
        db.Player.findAll({
            // include: [db.Team]
        }).then(function(dbGame) {
            res.json(dbGame);
        });
    });



    /// JOIN A GAME 
    app.post("/api/game/:gameID/joinGame", function(req, res) {

        // Add info to player table
        db.Player.create({
            playername: req.body.playername,
            email: req.body.email,
            password: req.body.password,
            teamname: req.body.teamname


        }).then(function(dbPlayer) {
            db.PlayerToGame.create({
                GameId: dbGame.id,
                PlayerId: dbPlayer.id,
                teamname: dbPlayer.teamname,
                admin: true

                // Redirect to dashboard url
            }).then(function(dbPlayer) {

                res.json(dbPlayer);
            }).catch(function(error) {
                res.send(error);
            });
        });
    });


    // GETS users for handling log-in info. // may have to be restructured.
    app.get("/api/login", function(req, res) {

        db.Player.findOne({
            where: {
                name: req.body.name,
                password: req.body.password,
            }
        })



        db.Game.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(dbPlayer) {

            if (username) {
                res.redirect("/game/" + gameID + "/player/" + playerID)
            }

            res.json(dbPlayer);
        });
    });


    // GETing specific info about a game.
    app.get("/game/:gameID/player/:playerID", function(req, res) {
        db.Game.findOne({
            where: {
                id: req.params.gameID
            },
            // include: [{
            //     model: db.Team
            // }]
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