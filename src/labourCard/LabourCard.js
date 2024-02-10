// LaborCard.js
import React, { useState } from 'react';
import SearchResult from './SearchResult';

const LabourCard = ({ labour }) => {
  const [SearchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = (query) => {
    const data = [
      { id: 1, name: 'John Doe', profession: 'Plumber', contactNumber: '123-456-7890', schedule: 'busy', ownerName: 'ServiceLane', availability: '2024-02-10' },
      // Add more sample data as needed
    ];

    const filteredResults = data.filter((item) => item.profession.toLowerCase().includes(query.toLowerCase()));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);

    setSearchResults(filteredResults);
  };

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
          <p>{SearchResults.length} People Found At Your Location</p>
        </div>
      )}

      {/* LaborCard content */}
      <div className="app-container">
        <h1>ServiceLane - Connecting You with Skilled Labour</h1>
        <SearchResult results={searchResults} />
      </div>
    </div>
  );
};

export default LabourCard;
