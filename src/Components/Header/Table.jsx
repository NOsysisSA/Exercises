
import React from 'react';
import './table.css'
function Table({ data }) {
  return (
    <div className='table'> 
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
