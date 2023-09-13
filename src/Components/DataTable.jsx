import React, { useState } from "react";
import "./style.css";

function DataTable({ data }) {
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = [...data];

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("person_ID")}>person_ID</th>
            <th onClick={() => handleSort("name")}>name</th>
            <th onClick={() => handleSort("first")}>first</th>
            <th onClick={() => handleSort("last")}>last</th>
            <th onClick={() => handleSort("middle")}>middle</th>
            <th onClick={() => handleSort("email")}>email</th>
            <th onClick={() => handleSort("phone")}>phone</th>
            <th onClick={() => handleSort("fax")}>fax</th>
            <th onClick={() => handleSort("title")}>title</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {Object.keys(row).map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={pageNumber === currentPage ? "active" : ""}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DataTable;
