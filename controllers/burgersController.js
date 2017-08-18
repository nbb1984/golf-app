// REQUIRE FILES
var express = require('express');
var router = express.Router();
var models = require('../models');

// REROUTE TO /BURGERS
router.get('/', function(req, res) {
    res.redirect('/golf');
});

// GET ALL BURGERS
router.get('/golf', function(req, res) {
    models.game.findAll().then(function(data) {
        var hbsObject = { games: data };
        res.render('index', hbsObject);
    });
});

// CREATE NEW GAME
router.post("/golf/newGame", function(req, res) {

    // Log "Create new game" data
    console.log("------------------------");
    console.log(req.body);
    console.log("------------------------");

    // Fill game table
    db.Game.create({
        coursename: req.body.coursename,
        date: req.body.date,
        time: req.body.time

        // Fill player table
    }).then(function(dbGame) {
        db.Player.create({
            playername: req.body.playername,
            email: req.body.email,
            password: req.body.password,
            teamname: req.body.teamname

            // Fill playertogame table
        }).then(function(dbPlayer) {
            db.PlayerToGame.create({
                GameId: dbGame.id,
                PlayerId: dbPlayer.id,
                teamname: dbPlayer.teamname,
                admin: true
            }).then(function() {
                res.redirect('/golf');
            });
        });
    });
});







// CREATE A NEW BURGER
router.post('/golf/create', function(req, res) {
    models.burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function() {
        res.redirect('/golf');
    });
});

// UPDATE DEVOUR PROPERTY
router.post('/golf/update/:id', function(req, res) {
    models.burger.update({
        devoured: req.body.devoured
    }, { where: { id: req.params.id } }).then(function(data) {
        res.redirect('/golf');
    }).error(function(err) {
        console.log("Update failed");
    });
});

// DELETE golf
router.delete('/golf/delete/:id', function(req, res) {
    models.burger.destroy({ where: { id: req.params.id } }).then(function() {
        res.redirect('/golf');
    });
});

// EXPORT ROUTER
module.exports = router;