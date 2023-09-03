import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import './header.css'
function Header() {
  const [csvData, setCsvData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCSVData = async () => {
    setLoading(true);
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

  return (
    <div className="header">
      <button onClick={fetchCSVData}>Load CSV</button>
      {loading && <p>Загрузка...</p>}
      {csvData.length > 0 && (
        <div className='table'> 
        <table>
          <thead>
            <tr>
              {Object.keys(csvData[0]).map((header) => (
                <th key={header}>{header}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {csvData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, index) => (
                  <td key={index}>{value}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      )}
    </div>
  );
}

export default Header;
