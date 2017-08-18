// export player sequelizer
module.exports = function(sequelize, DataTypes) {
    
 var Team = sequelize.define("Team", {

   TeamName: {
        type: DataTypes.STRING,
        // allowNull: false,
        // validate: {
        //     len: [1, 140]
        // }
    }
  });

  Team.associate = function(models) {

    Team.hasMany(models.Player, {
      onDelete: "cascade"
    });
    
    // Team.belongsToMany(models.Game, {
    //   through:"teamGame",
    //   onDelete: "cascade"
    // });
  };
  return Team;
};
