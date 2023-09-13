import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import DataTable from './DataTable';
import '../Components/style.css';

function Table() {
  const [csvData, setCsvData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
      <DataTable data={csvData} searchText={searchText} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
    </div>
  );
}

export default Table;
