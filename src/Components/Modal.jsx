import React from 'react';
import './modal.css';

function Modal({ searchText, handleSearch, toggleSortOption, sortOption }) {
  return (
    <div className='modal'>
      <div>
        <input
          type="text"
          placeholder="Поиск"
          value={searchText}
          onChange={handleSearch}
        />
        <label>
          <input
            type="checkbox"
            checked={sortOption}
            onChange={toggleSortOption}
          />
        </label>
      </div>
    </div>
  );
}

export default Modal;
