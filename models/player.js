// export player sequelizer
module.exports = function(sequelize, DataTypes) {
    
 var Player = sequelize.define("Player", {

	   name: {
	        type: DataTypes.STRING,
	        allowNull: false,
	        validate: {
	            len: [1, 140]
	        }
	    }
	});

	 Player.associate = function(models) {
	    // Associating Game with Posts
	    // When an Author is deleted, also delete any associated Posts
	    Player.hasOne(models.Player_To_Game, {

		  foreignKey: {
	        allowNull: false
	      },
	      onDelete: "cascade"
	    });
	  };
	  return Player; 
};