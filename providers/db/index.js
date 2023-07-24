// import required libraries
const mysql = require('mysql2');
const logger = require('../../logger/index');
const config = require('../../settings/settings.config');

const pool = mysql.createPool({
  host: config.APP_DB_HOST,
  user: config.APP_DB_USERNAME,
  password: config.APP_DB_PASSWORD,
  database: config.APP_DB,
});

// dbSetup module
const dbSetup = async () => {
  try {
    pool.promise();

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
