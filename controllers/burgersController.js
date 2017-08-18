// REQUIRE FILES
var express = require('express');
var router = express.Router();
var models = require('../models');




// ---------------------------- GET ROUTES ---------------------------- //


router.get('/', function(req, res) {
    res.render('index')
});

/// GET ALL GAMES
router.get('/', function(req, res) {
    models.Game.findAll({}).then(function(data) {
        var hbsObject = { games: data };
        res.render('index', hbsObject);
    });
});

/// GET ALL TEAMS
router.get('/api/teams', function(req, res) {
    models.Team.findAll({}).then(function(data) {
        var hbsObject = { teams: data };
        res.render('index', hbsObject);
    });
});

/// GET ALL PLAYERS
router.get('/api/players', function(req, res) {
    models.Players.findAll({}).then(function(data) {
        var hbsObject = { players: data };
        res.render('index', hbsObject);
    });
});

/// GET ALL PLAYERTOGAME

router.get('/api/players', function(req, res) {
    models.Players.findAll({}).then(function(data) {
        var hbsObject = { players: data };
        res.render('index', hbsObject);
    });
});

// ---------------------------- POST ROUTES ---------------------------- //

// // CREATE A NEW BURGER
// router.post('/burgers/create', function(req, res) {
//     models.burger.create({
//         burgnode er_name: req.body.burger_name,
//         devoured: req.body.devoured
//     }).then(function() {
//         res.redirect('/burgers');
//     });
// });

/// CREATE NEW GAME FROM BUTTON ON INDEX

router.post("/api/newGame", function(req, res) {

    console.log(req.body);

    // ADD TO GAME TABLE
    models.Game.create({
        coursename: req.body.coursename,
        date: req.body.date,
        time: req.body.time
        // ADD TO PLAYER TABLE
    }).then(function(modelsGame) {
        models.Player.create({
            playername: req.body.playername,
            email: req.body.email,
            password: req.body.password,
            teamname: req.body.teamname
            // ADD TO TEAM TABLE
        }).then(function(modelsPlayer) {
            models.Team.create({
                teamname: req.body.teamname
                // ADD TO PLAYER TO
            }).then(function(modelsTeam) {
                models.PlayerToGame.create({
                    GameId: modelsGame.id,
                    PlayerId: modelsPlayer.id,
                    teamname: modelsTeam.teamname,
                    admin: true
                }).then(function(modelsP2G) {
                    res.json({ modelsP2G, modelsTeam, modelsPlayer, modelsGame });
                    res.redirect('game/:GameId/player/:PlayerId')
                }).catch(function(error) {
                    res.send(error);
                });
            });
        });

    });
});





// UPDATE DEVOUR PROPERTY
router.post('/burgers/update/:id', function(req, res) {
    models.burger.update({
        devoured: req.body.devoured
    }, { where: { id: req.params.id } }).then(function(data) {
        res.redirect('/burgers');
    }).error(function(err) {
        console.log("Update failed");
    });
});



// EXPORT ROUTER
module.exports = router;