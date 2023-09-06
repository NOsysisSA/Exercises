import React, { useState } from 'react';

function SortButton({ data, setData }) {
  const [sortOrder, setSortOrder] = useState('asc');

  const sortData = () => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <button onClick={sortData}>Sort by name</button>
  );
}

export default SortButton;
