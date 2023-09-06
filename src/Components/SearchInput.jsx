
import React from 'react';

function SearchInput({ searchText, setSearchText }) {
  return (
    <input
      type="text"
      placeholder="Поиск по имени..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}

export default SearchInput;
