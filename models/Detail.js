const sequelize = require('sequelize');
const db = require('../config/database');
const order = require('../models/Order');
const rim = require('../models/Rim');
const Detail = db.define('DetailRimSale', {
        id: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        amount: {
            type: sequelize.FLOAT
        }
    }
    , {
        freezeTableName: true,
        timestamps: false,
    });

Detail.belongsTo(rim);
Detail.belongsTo(order);
rim.hasMany(Detail);
order.hasMany(Detail);

module.exports = Detail;
