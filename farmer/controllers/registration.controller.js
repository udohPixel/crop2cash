/* eslint-disable camelcase */
// import required modules
const apiResponse = require('../../common/ApiResponse');
const registrationService = require('../services/registration.service');

// farmer registration controller
const registrationCtrl = async (req, res) => {
  try {
    const {
      id, first_name, last_name, phone_number, age, address, crops,
    } = req.body;

    // farmer registration service
    const result = await
      registrationService(id, first_name, last_name, phone_number, age, address, crops);

    return apiResponse.success(res, 'Registration successful', result, 201);
  } catch (error) {
    return apiResponse.errorObject(res, error, null, 'farmer_registrationn');
  }
};

// export controller
module.exports = registrationCtrl;
