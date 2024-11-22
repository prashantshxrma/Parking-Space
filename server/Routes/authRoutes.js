const express = require('express');
const router = express.Router();
const { signup } = require('../Controllers/authController');

// Signup route
router.post('/signup', signup);

module.exports = router;
