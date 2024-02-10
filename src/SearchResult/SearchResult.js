// SearchResult.js
import React from 'react';

const SearchResult = ({ results }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <p>Name: {result.name}</p>
              <p>Profession: {result.profession}</p>
              <p>Contact Number: {result.contactNumber}</p>
              <p>Current Schedule: {result.schedule}</p>
              <p>Owner's Name: {result.ownerName}</p>
              <p>Availability: {result.availability}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResult;
