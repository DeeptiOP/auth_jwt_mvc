const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/authController');

// @route  POST /api/auth/register
// @desc   Register user
// @access Public
router.post(
  '/register',
  [
    body('username', 'Username is required').notEmpty(),
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password must be 6 or more characters').isLength({ min: 6 })
  ],
  authController.register
);

// @route  POST /api/auth/login
// @desc   Authenticate user & get token
// @access Public
router.post(
  '/login',
  [
    body('email', 'Please include a valid email').isEmail(),
    body('password', 'Password is required').exists()
  ],
  authController.login
);

module.exports = router;
