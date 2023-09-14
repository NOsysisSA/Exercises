import React, { useState } from "react";
import "./style.css";

function DataTable({
  data,
  searchText,
  currentPage,
  itemsPerPage,
  onPageChange,
}) {
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

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return String(value).toLowerCase().includes(searchText.toLowerCase());
      }
      return false;
    })
  );

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

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="table">
      <table>
        <thead>
          {data.length > 0 && (
            <tr>
              {Object.keys(data[0]).map((item, index) => (
                <th style={{ width: index === 0 ? '5%' : '10%' }} key={index} onClick={() => handleSort(item)}>
                  {item}
                </th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {paginatedData.map((row, index) => (
            <tr key={index}>
              {Object.keys(row).map((column) => (
                <td style={{ width: index === 0 ? '5%' : '10%' }} key={column}>{row[column]}</td>
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
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DataTable;
