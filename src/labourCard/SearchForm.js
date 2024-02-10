// SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div>
      {/* Input for labor search */}
      <form onSubmit={handleSearch}>
        <label>
          Search for a Labour:
          <input type="text" value={searchQuery} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </form>

      {/* Box below the input box */}
      <div className="box-below-input"></div>
    </div>
  );
};

export default SearchForm;
