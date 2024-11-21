import React from 'react';
import "../Style/BookingPage.css"
export const BookingPage = () => {
  return (
    <div className="booking-container">
      <h2>Book a Parking Space</h2>
      <form>
        <label htmlFor="vehicle-type">Vehicle Type:</label>
        <input type="text" id="vehicle-type" name="vehicle-type" required/>
        
        <label htmlFor="vehicle-number">Vehicle Number:</label>
        <input type="text" id="vehicle-number" name="vehicle-number" required/>
        
        <label htmlFor="checkin">Check-in Date & Time:</label>
        <input type="datetime-local" id="checkin" name="checkin" required/>
        
        <label htmlFor="checkout">Check-out Date & Time:</label>
        <input type="datetime-local" id="checkout" name="checkout" required/>
        
        <label htmlFor="fee">Fee:</label>
        <input type="text" id="fee" name="fee" placeholder="Enter fee" required/>
        
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};
