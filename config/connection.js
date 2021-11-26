const Sequelize = require('sequelize');
const mysql = require('mysql2');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

// connecting to mysql

const db = mysql.createConnection(
  {
      host:'localhost',
      //Your Mysql username,
      user: 'root',
      //Your Mysql password
      password:'Hannan09!!',
      database:'rating'
  },
  console.log('Connected to the rating database.')
);


module.exports = sequelize;