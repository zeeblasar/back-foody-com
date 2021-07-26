const { DataTypes } = require("sequelize");
const sequelize = require('../../../db/config');

const user = sequelize.define(
    "user",
    {
        uuid:{
            type: DataTypes.STRING_TYPE,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING_TYPE,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING_TYPE,
            allowNull: false,
        },
        role_id:{
            type: DataTypes.INT,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING_TYPE,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING_TYPE,
            allowNull: false,
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        status:{
            type: DataTypes.INT,
            allowNull: false,
        },
    },
    {
        tableName: "User",
        underscored: true,
    }
);

module.exports = user;
