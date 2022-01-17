const Sequelize = require('sequelize');
require('dotenv').config();

// mysql2 login and database name reference
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false
  }
);

module.exports = sequelize;