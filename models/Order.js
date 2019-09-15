const sequelize = require('sequelize');
const db = require('../config/database');

const Order = db.define('SaleOrder', {
        idSaleOrder: {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        totalAmount: {
            type: sequelize.FLOAT
        },
        totalAmountDiscount: {
            type: sequelize.FLOAT
        },
        date: {
            type: sequelize.DATE
        },
        idClient: {
            type: sequelize.INTEGER
        },
        idUser: {
            type: sequelize.INTEGER
        },
    }
    , {
        freezeTableName: true,
        timestamps: false,
    });
module.exports = Order;