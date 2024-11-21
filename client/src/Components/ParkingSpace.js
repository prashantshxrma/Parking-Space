import React, { useState, useEffect } from 'react';
import "../Style/ParkingSpace.css";

// Placeholder data for parking spaces
const initialSlots = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  status: 'available', // All slots initially available
}));

export const ParkingSpace = () => {
  const [slots, setSlots] = useState(initialSlots);

  const updateSlotStatus = (id, status) => {
    setSlots((prevSlots) => {
      return prevSlots.map((slot) =>
        slot.id === id ? { ...slot, status } : slot
      );
    });
  };

  useEffect(() => {
    // You could fetch this data from a backend API on initial load
    // For now, it's just static data
  }, []);

  return (
    <div className="parking-space">
      <h2>Available Parking Spaces</h2>
      <div className="parking-grid">
        {slots.map((slot) => (
          <div
            key={slot.id}
            className={`parking-slot ${slot.status}`}
            onClick={() => updateSlotStatus(slot.id, toggleStatus(slot.status))}
          >
            <span>{slot.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to toggle the status (available -> occupied -> reserved -> available)
const toggleStatus = (currentStatus) => {
  switch (currentStatus) {
    case 'available':
      return 'occupied';
    case 'occupied':
      return 'reserved';
    default:
      return 'available';
  }
};

export default ParkingSpace;
