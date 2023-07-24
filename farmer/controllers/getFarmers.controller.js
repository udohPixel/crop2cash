// import required modules
const apiResponse = require('../../common/ApiResponse');
const getFarmersService = require('../services/getFarmers.service');

// get farmers controller
const getFarmersCtrl = async (req, res) => {
  try {
    const queryStr = req.query;

    // get farmers service
    const farmers = await getFarmersService(queryStr);

    return apiResponse.success(res, 'Farmers found successfully', farmers);
  } catch (error) {
    return apiResponse.errorObject(res, error, null, 'get-farmers');
  }
};

// export controller
module.exports = getFarmersCtrl;
