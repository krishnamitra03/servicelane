// SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for a Labour (e.g., plumber, electrician):
        <input type="text" value={searchQuery} onChange={handleInputChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
