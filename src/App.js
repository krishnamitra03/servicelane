// App.js
import React, { useState } from 'react';
import SearchForm from './searchForm';
import SearchResult from './searchResult';
import './App.css';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // Declare the state here
  const handleSearch = (query) => {
    
  
    const data = [
      { id: 1, name: 'John Doe', profession: 'Plumber', contactNumber: '123-456-7890', schedule: 'busy', ownerName: 'ServiceLane', availability: '2024-02-10' },
    
    ];

    
    const filteredResults = data.filter((item) =>
      item.profession.toLowerCase().includes(query.toLowerCase())
    );
    const numberOfResults = filteredResults.length;
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
    <div className="box-below-navbar"></div>
    {/* Popup */}
    {showPopup && (
        <div className="popup">
          <p>{searchResults.length} People Found At Your Location</p>
        </div>
      )}
    <div className='app-container'>
      <h1>ServiceLane - Connecting You with Skilled Labour</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResult results={searchResults} />
    </div>
    <div className='Box-below-search'></div>
    </div>
  );
};

export default App;
