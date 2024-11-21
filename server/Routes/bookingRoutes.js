const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings } = require('../Controller/bookingController');
const authMiddleware = require('..Middleware/authMiddleware');

// Create Booking
router.post('/', authMiddleware, createBooking);

// Get All Bookings
router.get('/', authMiddleware, getAllBookings);

module.exports = router;