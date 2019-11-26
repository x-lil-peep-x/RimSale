const sequelize = require('sequelize');
const db = require('../config/database');

const Rim = db.define('Rim', {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        brand: {
            type: sequelize.STRING
        },
        hoop: {
            type: sequelize.STRING
        },
        price: {
            type: sequelize.FLOAT
        },
        amountAvailable: {
            type: sequelize.FLOAT
        },
        description: {
            type: sequelize.STRING
        },
        active: {
            type: sequelize.STRING
        }
    }
    , {
        freezeTableName: true,
        timestamps: false,
    });
module.exports = Rim;
