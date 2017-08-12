// export player sequelizer
module.exports = function(sequelize, DataTypes) {
    
 var Team = sequelize.define("Team", {

   Team_Name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    }
  });

  Team.associate = function(models) {
    // Associating Game with Posts
    // When an Author is deleted, also delete any associated Posts
    Team.hasOne(models.Player_To_Game, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };
  return Team;
};