require('dotenv').config();

module.exports = {
  APP_DB: process.env.APP_DB,
  APP_DB_HOST: process.env.APP_DB_HOST,
  APP_DB_PORT: process.env.APP_DB_PORT,
  APP_DB_USERNAME: process.env.APP_DB_USERNAME,
  APP_DB_PASSWORD: process.env.APP_DB_PASSWORD,
  APP_PRIVATE_KEY: process.env.APP_PRIVATE_KEY,
  NODE_ENV: process.env.NODE_ENV,
};
