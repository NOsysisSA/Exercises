import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import Table from './Table'; 

function Loader() {
  const [csvData, setCsvData] = useState([]);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    const fetchCSVData = async () => {
      try {
        const response = await axios.get('https://raw.githubusercontent.com/lawlesst/vivo-sample-data/master/data/csv/people.csv');
        const result = Papa.parse(response.data, { header: true });
        setCsvData(result.data);
      } catch (error) {
        console.error('error', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCSVData();
  }, []);



  return (
    <div className='loader'>
      {loading && <p>loading...</p>}
      <button >Sort</button>
      {csvData.length > 0 && <Table data={csvData} />}
    </div>
  );
}

export default Loader;
