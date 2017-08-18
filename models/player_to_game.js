// export player sequelizer
module.exports = function(sequelize, DataTypes) {
  
  var PlayerToGame = sequelize.define("PlayerToGame", {

    // playerID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // teamID: {
    //   type: DataTypes.INTEGER
    //   allowNull: false
    // },
    // gameID: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    //},
    admin: DataTypes.BOOLEAN,
    hole1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    hole18: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  });

  PlayerToGame.associate = function(models) {
    // Associating Game with Posts
    // When an Author is deleted, also delete any associated Posts
    PlayerToGame.belongsToMany(models.Player, {
      through: "playerThrough",
      onDelete: "cascade"
    });

    PlayerToGame.belongsToMany(models.Game, { 
      through: "gameThrough",
      onDelete: "cascade"
    });   
  };

  return PlayerToGame;
};
