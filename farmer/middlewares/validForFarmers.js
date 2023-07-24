// import required modules
const apiResponse = require('../../common/ApiResponse');

const {
  registration,
} = require('../validations/farmersValidationSchema');

// is registration values validated
const isValidForRegistration = async (req, res, next) => {
  // validate user-imputed values
  const validForRegistration = await registration.validate(req.body);

  // check if user-imputed values had errors
  if (validForRegistration.error) {
    apiResponse.error(res, validForRegistration.error?.message);
  } else {
    next();
  }
};

// export
module.exports = {
  isValidForRegistration,
};
