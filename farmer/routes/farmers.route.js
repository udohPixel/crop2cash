// import required libraries
const express = require('express');

// import required middlewares
const {
  isValidForRegistration,
} = require('../middlewares/validForFarmers');

// import required controllers
const registrationCtrl = require('../controllers/registration.controller');
const getFarmersCtrl = require('../controllers/getFarmers.controller');

// create router
const router = express.Router();

// use router
/**
 * @desc    - route for getting app introductory message
 * @api     - /
 * @access  - PUBLIC
 * @type    - GET
 */
router.get('/', (req, res) => {
  res.json(
    {
      projectName: 'crop2cash',
      name: 'Udoh Ndem',
      tel: '07067944338',
      email: 'udohndem@gmail.com',
      facebook: 'udohPixel',
      endPoints: {
        register: 'HTTP POST /api/v1/register',
        farmers: 'HTTP GET /api/v1/farmers',
      },
    },
  );
});

/**
 * @desc    - route for creating new farmer
 * @api     - /api/v1/register
 * @access  - PUBLIC
 * @type    - POST
 */
router.post('/api/v1/register', isValidForRegistration, registrationCtrl);

/**
 * @desc    - route for fetching farmers
 * @api     - /api/v1/farmers
 * @access  - PUBLIC
 * @type    - GET
 */
router.get('/api/v1/farmers', getFarmersCtrl);

// export router
module.exports = router;
