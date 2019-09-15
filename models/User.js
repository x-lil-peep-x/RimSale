const sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('User', {
        idUser: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: sequelize.STRING
        },
        secondName: {
            type: sequelize.STRING
        },
        lastName: {
            type: sequelize.STRING
        },
        motherLastName: {
            type: sequelize.STRING
        },
        nick: {
            type: sequelize.STRING
        },
        password: {
            type: sequelize.STRING
        },
        idRole: {
            type: sequelize.INTEGER
        },
        active: {
            type: sequelize.BOOLEAN
        }
    }
    , {
        freezeTableName: true,
        timestamps: false,
    });
module.exports = User;