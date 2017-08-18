// REQUIRE FILES
var express = require('express');
var router = express.Router();
var models = require('../models');

// REROUTE TO /BURGERS
router.get('/golf', function(req, res) {
    res.redirect('/burgers');
});

// GET ALL BURGERS
router.get('/golf', function(req, res) {
    models.Game.findAll().then(function(data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });
});

// CREATE NEW EVENT
router.post('/golf/create', function(req, res) {
    models.burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function() {
        res.redirect('/burgers');
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

// DELETE BURGERS
router.delete('/burgers/delete/:id', function(req, res) {
    models.burger.destroy({ where: { id: req.params.id }}).then(function() {
        res.redirect('/burgers');
    });
});

// EXPORT ROUTER
module.exports = router;