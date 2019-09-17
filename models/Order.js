const sequelize = require('sequelize');
const db = require('../config/database');
const client = require('./Client');
const user = require('./User');

const Order = db.define('SaleOrder', {
        id: {
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
        clientId:{
            type: sequelize.STRING
        },
        userId:{
            type: sequelize.STRING
        }
    }
    ,
    {
        freezeTableName: true,
        timestamps: false,
    });
//Relations
Order.belongsTo(client);
Order.belongsTo(user);
user.hasMany(Order);
client.hasMany(Order);
module.exports = Order;