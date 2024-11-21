const express = require('express');
const router = express.Router();
const { signup, signin } = require('../controllers/authController');

// User Registration
router.post('/signup', signup);

// User Login
router.post('/signin', signin);

module.exports = router;