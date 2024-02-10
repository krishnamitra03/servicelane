// LaborCard.js
import React from 'react';

const LaborCard = ({ labor }) => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src="/path/to/your/logo.png" alt="ServiceLane Logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <div className="user-section">
          <p>User Name</p>
        </div>
      </nav>

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <p>{searchResults.length} People Found At Your Location</p>
        </div>
      )}

      {/* LaborCard content */}
      <div className="app-container">
        <h1>ServiceLane - Connecting You with Skilled Labour</h1>
        {/* Render the details of the labor */}
        <p>Name: {labor.name}</p>
        <p>Profession: {labor.profession}</p>
        <p>Contact Number: {labor.contactNumber}</p>
        <p>Current Schedule: {labor.schedule}</p>
        <p>Owner's Name: {labor.ownerName}</p>
        <p>Availability: {labor.availability}</p>
      </div>
    </div>
  );
};

export default LaborCard;
