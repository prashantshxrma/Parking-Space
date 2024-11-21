const Booking = require('../Models/Booking');

// Create Booking
exports.createBooking = async (req, res) => {
    const { vehicleType, vehicleNumber, checkin, checkout, fee } = req.body;

    try {
        const newBooking = new Booking({
            userId: req.user._id,
            vehicleType,
            vehicleNumber,
            checkin,
            checkout,
            fee,
        });
        await newBooking.save();
        res.status(201).send('Booking created successfully');
    } catch (error) {
        res.status(400).send('Error creating booking');
    }
};

// Get All Bookings
exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user._id });
        res.json(bookings);
    } catch (error) {
        res.status(400).send('Error fetching bookings');
    }
};