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
  return Player;
};