const { Sequelize } = require("sequelize");

require("dotenv").config();

const db = new Sequelize({
  database: process.env.DB_NAME || "api_chat",
  username: process.env.DB_USERNAME || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD || "root",
  dialect: "postgres",
  logging: false,
  dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
});

module.exports = db;
