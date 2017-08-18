// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {

    // INDEX
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    });

    // JOIN
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/join.html"));
    });

    // DASHBOARD
    app.get("/game/{gameID}/player/{playerID}", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/game.html"));
    });

};