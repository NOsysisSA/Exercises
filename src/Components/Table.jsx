import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import DataTable from './DataTable';
import '../Components/style.css'

function Table() {
  const [csvData, setCsvData] = useState([]);
  const [searchText, setSearchText] = useState('');
  
  useEffect(() => {
    Papa.parse("https://raw.githubusercontent.com/lawlesst/vivo-sample-data/master/data/csv/people.csv", {
      header: true,
      download: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (result) => {
        setCsvData(result.data);
      },
    });
  }, []);

  const filteredData = csvData.filter((row) =>
  Object.values(row).some((value) => {
    if (typeof value === 'string') {
      return value.toLowerCase().includes(searchText.toLowerCase());
    } else if (typeof value === 'number') {
      return String(value).toLowerCase().includes(searchText.toLowerCase());
    }
    return false;
  })
);

  return (
    <div>
      <div className='search'> 
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <DataTable data={filteredData} />
    </div>
  );
}

export default Table;
