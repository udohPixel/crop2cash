/* eslint-disable camelcase */
// import required modules
const ApplicationException = require('../../common/ApplicationException');
const { pool } = require('../../providers/db');

// register service
const registrationService = async (id, first_name, last_name, phone_number, age, address, crops) => {
  // save new farmer object in DB
  const sql = 'INSERT INTO farmers (id, first_name, last_name, phone_number, age, address, crops) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [
    id, first_name, last_name, phone_number, age, address, crops,
  ];

  const newFarmer = await pool.promise().query({
    sql, values,
  });

  return newFarmer;
};

// export service
module.exports = registrationService;
