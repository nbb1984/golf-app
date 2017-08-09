// export player sequelizer
module.exports = function(sequelize, DataTypes) {
    
 var Team = sequelize.define("Team", {

   name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    }
  });
  return Team;
};