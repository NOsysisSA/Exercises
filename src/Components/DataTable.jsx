import React, { useState } from "react";
import "./style.css";

function DataTable({ data }) {
  const [filterValues, setFilterValues] = useState({
    person_ID: "",
    name: "",
    first: "",
    last: "",
    middle: "",
    phone: "",
    fax: "",
    email: "",
    title: "",
  });

  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

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
        return String(row[column])
          .toLowerCase()
          .includes(filterValues[column].toLowerCase());
      }
      return row[column]
        .toLowerCase()
        .includes(filterValues[column].toLowerCase());
    });
  });

  const sortedData = [...filteredData];

  if (sortColumn) {
    sortedData.sort((a, b) => {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];

      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortDirection === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return sortDirection === "asc" ? valueA - valueB : valueB - valueA;
      }
    });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>
              person_ID{" "}
              <input
                type="text"
                value={filterValues.person_ID}
                onChange={(e) => handleChange(e, "person_ID")}
              />
              <button onClick={() => handleSort("person_ID")}>Sort</button>
            </th>
            <th>
              name{" "}
              <input
                type="text"
                value={filterValues.name}
                onChange={(e) => handleChange(e, "name")}
              />
              <button onClick={() => handleSort("name")}>Sort</button>
            </th>
            <th>
              first{" "}
              <input
                type="text"
                value={filterValues.first}
                onChange={(e) => handleChange(e, "first")}
              />
              <button onClick={() => handleSort("first")}>Sort</button>
            </th>
            <th>
              last{" "}
              <input
                type="text"
                value={filterValues.last}
                onChange={(e) => handleChange(e, "last")}
              />
              <button onClick={() => handleSort("last")}>Sort</button>
            </th>
            <th>
              middle{" "}
              <input
                type="text"
                value={filterValues.middle}
                onChange={(e) => handleChange(e, "middle")}
              />
              <button onClick={() => handleSort("middle")}>Sort</button>
            </th>
            <th>
              email{" "}
              <input
                type="text"
                value={filterValues.email}
                onChange={(e) => handleChange(e, "email")}
              />
              <button onClick={() => handleSort("email")}>Sort</button>
            </th>
            <th>
              phone{" "}
              <input
                type="text"
                value={filterValues.phone}
                onChange={(e) => handleChange(e, "phone")}
              />
              <button onClick={() => handleSort("phone")}>Sort</button>
            </th>
            <th>
              fax{" "}
              <input
                type="text"
                value={filterValues.fax}
                onChange={(e) => handleChange(e, "fax")}
              />
              <button onClick={() => handleSort("fax")}>Sort</button>
            </th>
            <th>
              title{" "}
              <input
                type="text"
                value={filterValues.title}
                onChange={(e) => handleChange(e, "title")}
              />
              <button onClick={() => handleSort("title")}>Sort</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
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
