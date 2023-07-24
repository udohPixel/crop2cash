// import required modules
const { pool } = require('../../providers/db');

// all filters
const farmerFilters = {

  // filter function
  filterItems: async (queryStr) => {
    //
    const filterAttr = Object.keys(queryStr)
      .filter((value) => Object.values(queryStr)[0].includes(value));
    let filterValue;

    if (filterAttr.length === 1) {
      filterValue = Object.values(queryStr)[(Object.keys(queryStr)).indexOf(filterAttr[0])];
    } else {
      filterValue = (Object.values(queryStr)).splice(1, Object.values(queryStr).length - 1);
    }

    // find by filter attribute(s) only
    if (queryStr.filter_attr && Object.keys(queryStr).length === 1) {
      console.log('We dey here 2');

      const sql = 'SELECT ?? FROM farmers';
      const [rows] = await pool.promise()
        .query(sql, [queryStr.filter_attr]);

      return rows;
    }

    // find by filter attribute(s) and attribute is one
    if (queryStr.filter_attr
      && filterValue && Object.keys(queryStr).length > 1 && filterAttr.length === 1) {
      console.log('We dey here 3');

      let sql;

      if (queryStr.age && !queryStr.age.toString().includes('-')) {
        sql = `SELECT ?? FROM farmers WHERE age = ${filterValue}`;
      } else if (queryStr.age && queryStr.age.toString().includes('-')) {
        sql = `SELECT ?? FROM farmers WHERE age BETWEEN ${filterValue.toString().substr(0, filterValue.toString().indexOf('-'))} AND ${filterValue.toString().substr(filterValue.toString().indexOf('-') + 1)}`;
      } else if (filterAttr[0] === 'crops' && typeof filterValue === 'string') {
        sql = `SELECT ?? FROM farmers WHERE crops LIKE '%${filterValue}%'`;
      } else if (filterAttr[0] === 'crops' && typeof filterValue === 'object') {
        let k;
        for (k = 0; k < filterValue.length; k++) {
          sql = `SELECT ?? FROM farmers WHERE  crops LIKE '%${filterValue[k]}%'`;
        }
      } else {
        sql = `SELECT ?? FROM farmers WHERE ${filterAttr} = ? `;
      }
      const [rows] = await pool.promise()
        .query(sql, [queryStr.filter_attr, filterValue]);

      return rows;
    }

    // find by filter attribute(s) and attribute(s) is two
    if (queryStr.filter_attr
      && filterValue && filterAttr.length > 1) {
      console.log('We dey here 4');

      const filterObject = {};
      let i;

      for (i = 0; i < filterAttr.length; i++) {
        filterObject[filterAttr[i]] = filterValue[i];
      }

      let sqli = 'SELECT ?? FROM farmers WHERE ';

      // find by id filter attribute
      if (queryStr.id) {
        sqli += `${queryStr.id ? '' : ' AND'} id = ${filterObject.id}`;
      }

      // find by first_name filter attribute
      if (queryStr.first_name) {
        console.log('We dey here fn');
        sqli += `${queryStr.first_name ? '' : ' AND'} first_name = "${filterObject.first_name}"`;
      }

      // find by last_name filter attribute
      if (queryStr.last_name) {
        console.log('We dey here ln');
        sqli += `${queryStr.last_name ? '' : ' AND'} last_name = "${filterObject.last_name}"`;
      }

      // find by phone_number filter attribute
      if (queryStr.phone_number) {
        console.log('We dey here pn');
        sqli += `${queryStr.phone_number ? '' : ' AND'} phone_number = "${filterObject.phone_number}"`;
      }

      // find by age filter attribute
      if (queryStr.age && !queryStr.age.toString().includes('-')) {
        console.log('We dey here age');
        sqli += `${queryStr.age ? '' : ' AND'} age = ${filterObject.age}`;
      }

      // find by age range filter attribute
      if (queryStr.age && queryStr.age.toString().includes('-')) {
        console.log('We dey here age range');
        sqli += `${queryStr.age ? '' : ' AND'} age BETWEEN ${filterObject.age.toString().substr(0, filterObject.age.toString().indexOf('-'))} AND ${filterObject.age.toString().substr(filterObject.age.toString().indexOf('-') + 1)}`;
      }

      // find by crops filter attribute crops = 1
      if (queryStr.crops && typeof queryStr.crops === 'string') {
        console.log('We dey here again');
        sqli += `${!queryStr.crops ? '' : ' AND'} crops LIKE '%${filterObject.crops}%'`;
      }

      // find by crops filter attribute crops > 1
      if (queryStr.crops && typeof queryStr.crops === 'object') {
        console.log('We dey here again again oh');

        let k;
        for (k = 0; k < filterObject.crops.length; k++) {
          sqli += ` AND crops LIKE '%${filterObject.crops[k]}%'`;
        }
      }

      const [rows] = await pool.promise()
        .query(sqli, [queryStr.filter_attr]);

      return rows;
    }
  },
};

// export
module.exports = farmerFilters;
