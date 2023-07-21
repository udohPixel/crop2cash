// import required modules
const logger = require('../logger');
const ApplicationException = require('./ApplicationException');

function send(res, code, status, message) {
  const responseData = {
    message,
    status,
  };
  return res.status(code).json(responseData);
}

// declare api response class
class ApiResponse {
  constructor() {
    this.send = send.bind(this);
  }

  // success response
  success(res, code) {
    return this.send(res, code || 200, 'ok');
  }

  // error response
  error(res, message, code) {
    return this.send(res, code || 400, 'error', message);
  }

  // error object response
  errorObject(res, error, statusCcode, meta) {
    let message;
    let code;

    if (error instanceof ApplicationException) {
      message = error.message;
      code = error.code;
    } else if (statusCcode === 404) {
      message = 'Not found';
    } else {
      logger.error(error.message, { ...error, meta });
      message = 'Invalid payload passed.';
      code = 400;
    }

    return this.send(res, code, 'error', message, null);
  }
}

const apiResponse = new ApiResponse();

// export
module.exports = apiResponse;
