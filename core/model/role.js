const { DataTypes } = require('sequelize');
const sequelize = require('../../db/config');

const role = sequelize.define(
    "role",
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        status:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: "Role",
        timestamps: false,
        underscored: true,
    }
);

module.exports = role;
