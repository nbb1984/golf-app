# golf-app

Created a golf-app using a mySql database and the node library Sequelize.  

App allow users to create teams, events, and enter scores for those events which will then be entered into a database.  

App uses sequelize to create tables with players, games, and a player-to-game table that pulls from player and game tables to create a scorecared with all relevant information on it.  

Front-end js makes AJAX requests to the back-end in order grab data and render it to handlebars.  

Future functionality to add would be an api request to the golf api that would allow users to view information about courses with weather conditions, etc.  
