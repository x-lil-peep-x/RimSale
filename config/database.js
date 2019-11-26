const Sequelize = require('sequelize');
module.exports = new Sequelize('TireSales', 'sa', 'Secret12345', {
    host: 'localhost',
    dialect:'mssql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});