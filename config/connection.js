const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

sequelize = new Sequelize (
    'sneakers_db',
    'root',
    'password',
    {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    }
);

module.exports = sequelize;
