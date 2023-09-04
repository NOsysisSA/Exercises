
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import CSVTable from './Table'; 
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
        console.error('Ошибка при загрузке CSV:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCSVData();
  }, []); 

  return (
    <div>
      {loading && <p>Загрузка...</p>}
      {csvData.length > 0 && <CSVTable data={csvData} />}
    </div>
  );
}

export default Loader;
