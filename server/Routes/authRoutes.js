const express = require('express');
const router = express.Router();
const { signup, signin } = require('../Controller/authController');

// User Registration
router.post('/signup', signup);

// User Login
router.post('/signin', signin);

module.exports = router;