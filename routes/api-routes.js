// Routes =============================================================
var db = require("../models/index.js");

module.exports = function(app) {

    // ---------------------------- GET ROUTES ---------------------------- //

    /// SHOW INDEX ON LOAD
    app.get("/", function(req, res) {
        res.render('index', req);
    });

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
            //res.json(dbPlayer);
            res.render('playerstable', dbPlayer);

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

    // var hbsObject = { burgers: data };
    // res.render('index', hbsObject);

    /// SEND TO GAME PAGE
    app.get("/game/:GameId/player/:PlayerId", function(req, res) {
        db.Game.findOne({
            where: {
                id: req.params.gameID
            },
        }).then(function(dbGame) {
            db.PlayerToGame.findAll({
                    where: {
                        GameId: req.params.GameId,
                        PlayerId: req.params.PlayerId
                    }
                })
                .then(function(data) {
                    var hbsObject = { PlayerToGame: data };
                    res.render("index", hbsObject);
                });
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
                    }).then(function(data) {

                        res.redirect("/game/:" + data.GameId + "/player/:" + data.PlayerId);

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
                    GameId: req.body.gameID,
                    PlayerId: dbPlayer.id,
                    teamname: dbTeam.teamname,
                    admin: false

                }).then(function(dbP2G) {

                    res.redirect("/game/:" + dbP2G.GameId + "/player/:" + dbP2G.PlayerId);

                }).catch(function(error) {
                    res.send(error);
                });
            });
        });

    });


    /// ENTER SCORE TAB ON GAME

    app.post("/api/enterscore/:PlayerId/:GameId", function(req, res) {

        console.log("\n\n\n>>>>");
        console.log(req.body);
        console.log("\n\n\n>>>>");

        console.log(req.res.PlayerId);
        console.log(req.res.GameId);

        db.PlayerToGame.update({

            Hole1: req.body.Hole1,
            Hole2: req.body.Hole2,
            Hole3: req.body.Hole3,
            Hole4: req.body.Hole4,
            Hole5: req.body.Hole5,
            Hole6: req.body.Hole6,
            Hole7: req.body.Hole7,
            Hole8: req.body.Hole8,
            Hole9: req.body.Hole9,
            Hole10: req.body.Hole10,
            Hole11: req.body.Hole11,
            Hole12: req.body.Hole12,
            Hole13: req.body.Hole13,
            Hole14: req.body.Hole14,
            Hole15: req.body.Hole15,
            Hole16: req.body.Hole16,
            Hole17: req.body.Hole17,
            Hole18: req.body.Hole18,

        }, {
            where: {
                PlayerId: req.params.id,
                GameId: req.params.id

            }
        }).then(function(data) {

            res.redirect('//game/:GameId/player/:PlayerId"');

        }).error(function(err) {
            console.log("Update failed");
        });
        
    });

    // ---------------------------- INCOMPLETE ---------------------------- //

    // // GETS users for handling log-in info. // may have to be restructured.
    // app.get("/api/login", function(req, res) {

    //     db.Player.findOne({
    //         where: {
    //             name: req.body.name,
    //             password: req.body.password,
    //         }
    //     })

    //     db.Game.findOne({
    //         where: {
    //             id: req.params.id
    //         },
    //     }).then(function(dbPlayer) {

    //         if (username) {
    //             res.redirect("/game/" + gameID + "/player/" + playerID)
    //         }

    //         res.json(dbPlayer);
    //     });
    // });


    // // GETing specific info about a game.
    // app.get("/game/:gameID/player/:playerID", function(req, res) {
    //     db.Game.findOne({
    //         where: {
    //             id: req.params.gameID
    //         },
    //         // include: [{
    //         //     model: db.Team
    //         // }]
    //     }).then(function(dbGame) {
    //         res.json(dbGame);
    //     });

    //     db.PlayerToGame.findAll({
    //         where: {
    //             GameID: req.params.gameID
    //         }
    //     }).then(function(dbPlayerToGame) {
    //         res.json(dbPlayerToGame);
    //     });


    // });

    // //
    // app.get("/find/game/:gameID/player/:playerID", function(req, res) {
    //     db.Player_To_Game.findAll({
    //         include: db.Player,
    //         include: db.Team,
    //         where: {
    //             GameID: req.params.gameID
    //         }
    //     }).then(function(dbPlayerToGame) {
    //         res.json(dbPlayerToGame);
    //     });
    // });

} // CLOSE EXPORT