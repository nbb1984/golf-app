module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {

    teams: DataTypes.STRING,
    winningteam: {
                    type: DataTypes.STRING,
                },
    coursename: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
    date: DataTypes.STRING,
    time: DataTypes.STRING 
  });

  Game.associate = function(models) {

    Game.hasMany(models.PlayerToGame, {
      onDelete: "cascade"
    });

  };
  return Game;
};
