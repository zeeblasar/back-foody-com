const { DataTypes } = require("sequelize");
const sequelize = require('../../db/config');

const user = sequelize.define(
    "user",
    {
        uuid:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        role_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
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
        timestamps: false,
        tableName: "User",
        underscored: true,
    }
);

module.exports = user;
