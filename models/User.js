const sequelize = require('sequelize');
const db = require('../config/database');
const role = require('./Role');
const User = db.define('User', {
        id: {
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
        active: {
            type: sequelize.BOOLEAN
        },
        roleId:{
            type: sequelize.INTEGER,
            references:{
                model:role,
                key: 'id'
            }
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    });

User.belongsTo(role);
role.hasMany(User);
module.exports = User;