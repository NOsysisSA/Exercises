import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './style.css'
import DataTable from './DataTable';
import SortButton from './SortButton';
import SearchInput from './SearchInput';

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
  row.name.toLowerCase().includes(searchText.toLowerCase())
);

  return (
    <div>
        <div className='search'> 
            <SearchInput searchText={searchText} setSearchText={setSearchText} />
            <SortButton data={csvData} setData={setCsvData} />
        </div>
        <DataTable data={filteredData} />
    </div>
  );
}

export default Table;
