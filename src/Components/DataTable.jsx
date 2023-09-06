import React from 'react';
import './style.css'
function DataTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>person_ID</th>
          <th>name</th>
          <th>first</th>
          <th>last</th>
          <th>middle</th>
          <th>email</th>
          <th>phone</th>
          <th>fax</th>
          <th>title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.person_ID}</td>
            <td>{row.name}</td>
            <td>{row.first}</td>
            <td>{row.last}</td>
            <td>{row.middle}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.fax}</td>
            <td>{row.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
