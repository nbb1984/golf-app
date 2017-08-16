// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // index route loads home.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });
  // blog route loads blog.html
  app.get("/game/{gameID}/player/{playerID}", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/game.html"));
  });
  // authors route loads player_to_game.html
  app.get("/player/{playerID}", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/player_profile.html"));
  });
};