// export player sequelizer
module.exports = function(sequelize, DataTypes) {

    var PlayerToGame = sequelize.define("PlayerToGame", {

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
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        teamname: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
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