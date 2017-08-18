// Routes =============================================================
var db = require("../models/index.js");

module.exports = function(app) {

    // ---------------------------- GET ROUTES ---------------------------- //

    /// GET ALL GAMES
    app.get("/api/games", function(req, res) {
        db.Game.findAll({
            // include: [db.Team]
        }).then(function(dbGame) {
            res.json(dbGame);
        });
    });

    /// GET ALL TEAMS
    app.get("/api/teams", function(req, res) {
        db.Team.findAll({
            // include: [db.Team]
        }).then(function(dbTeam) {
            res.json(dbTeam);
        });
    });

    /// GET ALL PLAYERS
    app.get("/api/players", function(req, res) {
        db.Player.findAll({
            // include: [db.Team]
        }).then(function(dbPlayer) {
            res.json(dbPlayer);
        });
    });

    /// GET ALL PLAYERTOGAME
    app.get("/api/playertogame", function(req, res) {
        db.PlayerToGame.findAll({
            // include: [db.Team]
        }).then(function(dbPlayerToGame) {
            res.json(dbPlayerToGame);
        });
    });



    // ---------------------------- POST ROUTES ---------------------------- //


    /// CREATE NEW GAME FROM BUTTON ON INDEX

    app.post("/api/newGame", function(req, res) {

        console.log("\n\n\n>>>>");
        console.log(req.body);
        console.log("\n\n\n>>>>");

        // ADD TO PLAYER TABLE
        db.Game.create({
            coursename: req.body.coursename,
            date: req.body.date,
            time: req.body.time

            // ADD TO PLAYER TABLE
        }).then(function(dbGame) {
            db.Player.create({
                playername: req.body.playername,
                email: req.body.email,
                password: req.body.password,
                teamname: req.body.teamname

                // ADD TO TEAM TABLE
            }).then(function(dbPlayer) {
                db.Team.create({
                    teamname: req.body.teamname

                    // ADD TO PLAYER TO
                }).then(function(dbTeam) {
                    db.PlayerToGame.create({
                        GameId: dbGame.id,
                        PlayerId: dbPlayer.id,
                        teamname: dbTeam.teamname,
                        admin: true


                    }).then(function(dbP2G) {
                        // res.json({ dbP2G, dbTeam, dbPlayer, dbGame });
                        res.redirect("/game/" + dbGame.id + "/player/" + dbPlayer.id)

                    }).catch(function(error) {
                        res.send(error);
                    });
                });
            });

        });
    });


    /// JOIN GAME FROM BUTTON ON INDEX

    app.post("/api/joinGame", function(req, res) {

        console.log("\n\n\n>>>>");
        console.log(req.body);
        console.log("\n\n\n>>>>");

        // ADD TO GAME TABLE
        db.Player.create({
            playername: req.body.playername,
            email: req.body.email,
            password: req.body.password,
            teamname: req.body.teamname

            // ADD TO PLAYER TABLE
        }).then(function(dbPlayer) {
            db.Team.create({
                teamname: req.body.teamname

                // ADD TO PLAYER TO
            }).then(function(dbTeam) {
                db.PlayerToGame.create({
                    // GameId: req.body.gameID,
                    PlayerId: dbPlayer.id,
                    teamname: dbTeam.teamname,
                    admin: false

                }).then(function(dbP2G) {
                    // res.json({ dbP2G, dbTeam, dbPlayer, dbGame });
                    res.redirect("/game/" + dbGame.id + "/player/" + dbPlayer.id)

                }).catch(function(error) {
                    res.send(error);
                });
            });
        });

    });



    /// ENTER SCORE TAB ON GAME





    // ---------------------------- INCOMPLETE ---------------------------- //

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