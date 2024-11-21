const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/authMiddleware');

// Create Booking
router.post('/', authMiddleware, createBooking);

// Get All Bookings
router.get('/', authMiddleware, getAllBookings);

module.exports = router;