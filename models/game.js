module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {

    Teams: DataTypes.STRING,
    WinningTeam: {
                    type: DataTypes.STRING,
                },
    CourseName: DataTypes.STRING,
    Complete: DataTypes.BOOLEAN,
    Date: DataTypes.STRING,
    Time: DataTypes.STRING 
  });

  Game.associate = function(models) {

    Game.hasMany(models.PlayerToGame, {
      onDelete: "cascade"
    });
    Game.hasMany(models.Team, {
      onDelete: "cascade"
    });
  };
  return Game;
};
