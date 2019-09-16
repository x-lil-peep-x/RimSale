const sequelize = require('sequelize');
const db = require('../config/database');

const Client = db.define('Client', {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        ci: {
            type: sequelize.STRING
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
        phone: {
            type: sequelize.STRING
        },
        active: {
            type: sequelize.BOOLEAN
        }
    }
    , {
        freezeTableName: true,
        timestamps: false,
    });
module.exports = Client;