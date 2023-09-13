import React, { useState } from "react";
import "./style.css";

function DataTable({ data }) {
  const [filterValues, setFilterValues] = useState({
    person_ID:"",
    name: "",
    first: "",
    last: "",
    middle: "",
    phone:"",
    fax:"",
    email: "",
    title: "",
  });


  const handleChange = (e, column) => {
    const { value } = e.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [column]: value,
    }));
  };

  const filteredData = data.filter((row) => {
    return Object.keys(filterValues).every((column) => {
      if (row[column] === null) {
        return true;
      }
      if (column === "person_ID" || column === "phone" || column === "fax") {
        return String(row[column]).toLowerCase().includes(filterValues[column].toLowerCase());
      }
      return row[column].toLowerCase().includes(filterValues[column].toLowerCase());
    });
  });
  
  


  return (
    <div> 

    <table>
      <thead>
        <tr>
          <th>
            person_ID <input
              type="text"
              value={filterValues.person_ID}
              onChange={(e) => handleChange(e, "person_ID")}
              />
          </th>
          <th>
            name <input
              type="text"
              value={filterValues.name}
              onChange={(e) => handleChange(e, "name")}
              />
          </th>
          <th>
            first <input
              type="text"
              value={filterValues.first}
              onChange={(e) => handleChange(e, "first")}
            />
          </th>
          <th>
            last <input
              type="text"
              value={filterValues.last}
              onChange={(e) => handleChange(e, "last")}
              />
          </th>
          <th>
            middle <input
              type="text"
              value={filterValues.middle}
              onChange={(e) => handleChange(e, "middle")}
              />
          </th>
          <th>
            email <input
              type="text"
              value={filterValues.email}
              onChange={(e) => handleChange(e, "email")}
              />
          </th>
          <th>
            phone <input
              type="text"
              value={filterValues.phone}
              onChange={(e) => handleChange(e, "phone")}
              />
          </th>
          <th>
            fax <input
              type="text"
              value={filterValues.fax}
              onChange={(e) => handleChange(e, "fax")}
              />
          </th>
          <th>
            title <input
              type="text"
              value={filterValues.title}
              onChange={(e) => handleChange(e, "title")}
              />
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row, index) => (
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
    
  </div>
  );
}

export default DataTable;
