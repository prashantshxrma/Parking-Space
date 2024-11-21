const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    vehicleType: { type: String, required: true },
    vehicleNumber: { type: String, required: true },
    checkin: { type: Date, required: true },
    checkout: { type: Date, required: true },
    fee: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);