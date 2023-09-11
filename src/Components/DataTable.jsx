import React, { useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import './style.css'
import Modal from './Modal'
function DataTable({ data }) {


  const [openModals, setOpenModals] = useState({
    person_ID: false,
    name: false,
    first: false,
    last: false,
    middle: false,
    title: false,
  });

  const toggleModal = (column) => {
    setOpenModals({
      ...openModals,
      [column]: !openModals[column],
    });
  };

  return (
    <table>
      <thead>
        <tr>
        <th>
            person_ID {<button onClick={() => toggleModal('person_ID')}>{openModals.person_ID ? <AiFillCaretUp /> : <AiFillCaretDown />}</button>}
            {openModals.person_ID && <Modal />}
          </th>
          <th>
            name {<button onClick={() => toggleModal('name')}>{openModals.name ? <AiFillCaretUp /> : <AiFillCaretDown />}</button>}
            {openModals.name && <Modal />}
          </th>
          <th>
            first {<button onClick={() => toggleModal('first')}>{openModals.first ? <AiFillCaretUp /> : <AiFillCaretDown />}</button>}
            {openModals.first && <Modal />}
          </th>
          <th>
            last {<button onClick={() => toggleModal('last')}>{openModals.last ? <AiFillCaretUp /> : <AiFillCaretDown />}</button>}
            {openModals.last && <Modal />}
          </th>
          <th>
          middle{<button onClick={() => toggleModal('middle')}>{openModals.middle  ? <AiFillCaretUp /> : <AiFillCaretDown />}</button>}
            {openModals.middle && <Modal />}
          </th>
          <th>email </th>
          <th>phone </th>
          <th>fax </th>
          <th>
            title {<button onClick={() => toggleModal('title')}>{openModals.title ? <AiFillCaretUp /> : <AiFillCaretDown />}</button>}
            {openModals.title && <Modal />}
          </th>
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
