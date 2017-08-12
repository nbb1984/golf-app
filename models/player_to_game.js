// export player sequelizer
module.exports = function(sequelize, DataTypes) {
  
  var Player_To_Game = sequelize.define("Player_To_Game", {

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
    // },
    Hole1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole17: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Hole18: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  });

  Player_To_Game.associate = function(models) {
    // Associating Game with Posts
    // When an Author is deleted, also delete any associated Posts
    Player_To_Game.belongsTo(models.Player_To_Game, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  return Player_To_Game;
};
  