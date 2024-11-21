import React from 'react';
import "../Style/Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#wallet">Wallet</a></li>
          <li><a href="#profile">My Profile</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
    </div>
  );
};
