// import required libraries
const express = require('express');

// import required routes
const farmers = require('../../farmer/routes/farmers.route');

// create express router
const router = express.Router();

// api routes setup
router.use('/', farmers);

module.exports = router;
