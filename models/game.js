module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    // Giving the Author model a name of type STRING
    Teams: DataTypes.STRING,
    Holes_played: {
                type: DataTypes.INTEGER, 
                allowNull: false, 
                validate: { 
                    len: [1, 18]
                  }
                },
    WinningTeam: {
                    type: DataTypes.STRING,
                },
    CourseName: DataTypes.STRING,
    Complete: DataTypes.BOOLEAN,
    Date: DataTypes.STRING,
    Time: DataTypes.STRING 
  });

// The following code is not quite ready, but this is the basic framework for associating tables
  Game.associate = function(models) {
    // Associating Game with Posts
    // When an Author is deleted, also delete any associated Posts
    Game.hasOne(models.Player_To_Game, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };
  return Game;
};