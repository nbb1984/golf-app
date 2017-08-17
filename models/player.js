// export player sequelizer
module.exports = function(sequelize, DataTypes) {
    
 var Player = sequelize.define("Player", {

	   player_name: {
	        type: DataTypes.STRING,
	        allowNull: true,
	        validate: {
	            len: [1, 140]
	        }
	    },
	    email: DataTypes.STRING,
	    password: DataTypes.STRING,
	    team: DataTypes.STRING
	});

	 Player.associate = function(models) {

	    Player.hasMany (models.PlayerToGame, {		
			onDelete: "cascade"
	    });

	    Player.belongsToMany (models.Team, {
			through: "playTeam",
			onDelete: "cascade"
	    });
	  };
	  return Player; 
};