const sequelize = require('sequelize');
const db = require('../config/database');

const Role = db.define('Role', {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: sequelize.STRING
        }
    } , {
        freezeTableName: true,
        timestamps: false,
    });
module.exports = Role;