// import required libraries
const mysql = require('mysql2');
const logger = require('../../logger/index');
const config = require('../../settings/settings.config');

let pool;

// dbSetup module
const dbSetup = async () => {
  try {
    pool = mysql.createPool({
      database: config.APP_DB,
      user: config.APP_DB_USERNAME,
      password: config.APP_DB_PASSWORD,
      host: config.APP_DB_HOST,
      port: config.APP_DB_PORT,
    }).promise();

    // const [rows,fields] = await pool.query("SELECT 1");

    logger.info('Connection to database has been established successfully');
  } catch (error) {
    const meta = 'database';

    logger.error(`Unable to connect to the database: ${error.message}`, {
      ...error,
      meta,
    });
  }
};

// export dbSetup module
module.exports = { pool, dbSetup };
