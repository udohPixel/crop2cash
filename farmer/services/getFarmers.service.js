// import required modules
const farmerFilters = require('../helpers/farmerFilters');

// get all farmers service
const getFarmersService = async (queryStr) => {
  // filter farmers
  const farmers = farmerFilters.filterItems(queryStr);

  return farmers;
};

// export service
module.exports = getFarmersService;
