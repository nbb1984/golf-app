module.exports = function(sequelize, DataTypes) {
  var Game = sequelize.define("Game", {
    // Giving the Author model a name of type STRING
    Teams: DataTypes.STRING,
    Holes_played: {
                type: DataTypes.INTEGER, 
                allowNull: false, 
                validate: { 
                    len: [1, 18]
                },
    Complete: DataTypes.BOOLEAN 

  });

// The following code is not quite ready, but this is the basic framework for associating tables
  Game.associate = function(models) {
    // Associating Game with Posts
    // When an Author is deleted, also delete any associated Posts
    Game.hasMany(models.Player_To_Game, {
      onDelete: "cascade"
    });
  };
  return Author;
};