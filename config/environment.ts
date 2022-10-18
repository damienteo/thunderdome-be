const dotenv = require("dotenv");
const path = require("path");

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "dev",
  PORT: process.env.PORT,
  db: {
    DATABASE: process.env.DB_DATABASE,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
  },
};
