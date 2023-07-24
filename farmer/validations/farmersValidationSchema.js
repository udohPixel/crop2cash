// import require modules
const Joi = require('joi');

// fees validation req schema
const registrationValidationSchema = {
  registration: Joi.object({
    // feeId: Joi.string().alphanum().length(8)
    //   .regex(/^LNPY[0-9]{4}$/)
    //   .required()
    //   .messages({
    //     'any.required': 'feeId is required',
    //     'string.alphanum': 'feeId should only contain alpha-numeric characters',
    //     'string.length': 'feeId length should be 8 characters long',
    //     'string.pattern.base': 'The first 4 characters should be LNPY and the later 4 should be integer numbers',
    //     'string.empty': 'feeId should not be empty',
    //   }),
    // id: Joi.number().max(11).required()
    //   .messages({
    //     'any.required': 'id is required',
    //     'number.base': 'id should be a number',
    //   }),
    first_name: Joi.string().max(255).required()
      .messages({
        'any.required': 'first_name is required',
        'any.only': 'first_name should be a string',
      }),
    last_name: Joi.string().max(255).required()
      .messages({
        'any.required': 'last_name is required',
        'any.only': 'last_name should be a string',
      }),
    phone_number: Joi.string().max(255).required()
      .messages({
        'any.required': 'phone_number is required',
        'any.only': 'phone_number should be a string',
      }),
    age: Joi.number().required()
      .messages({
        'any.required': 'age is required',
        'number.base': 'age should be a number',
      }),
    address: Joi.string().max(6000).required()
      .messages({
        'any.required': 'address is required',
        'any.only': 'address should be a string',
      }),
    crops: Joi.string().max(6000).required()
      .messages({
        'any.required': 'crops is required',
        'any.only': 'crops should be a string',
      }),
  }),

};

// export schema
module.exports = registrationValidationSchema;
