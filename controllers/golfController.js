// REQUIRE FILES
var express = require('express');
var router = express.Router();
var models = require('../models');

// REROUTE TO /BURGERS
router.get('/', function(req, res) {
    res.redirect('/golf');
});

// GET ALL GOLF GAMES -> DISPLAY ON INDEX PAGE
router.get('/golf', function(req, res) {
    models.burger.findAll().then(function(data) {
        var hbsObject = { golf: data };
        res.render('index', hbsObject);
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
    models.burger.destroy({ where: { id: req.params.id }}).then(function() {
        res.redirect('/golf');
    });
});

// EXPORT ROUTER
module.exports = router;