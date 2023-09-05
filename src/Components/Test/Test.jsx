import React from 'react'
import { useState } from 'react';
function Test() {
    const data = [
        { name: 'Bogdan', age: '12' },
        { name: 'Elsa', age: '13' },
        { name: 'Cebrina', age: '14' },
        { name: 'Dafna', age: '11' },
        { name: 'Abraham', age: '17' },
      ];

      const [sortData, setSortData] = useState(data)

      const sortByName = () => {
        const sortedData = [...sortData];
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        setSortData(sortedData);
      }
        const sortByAge = () => {
            const sortedData = [...sortData];
            sortedData.sort((b, a) => parseInt(a.age) - parseInt(b.age))
            setSortData(sortedData)
        }

  return (
    <div>
        <button onClick={sortByName}>Sort-by-name</button>
        <button onClick={sortByAge}>Sort-by-age</button>
        <table>
            <thead>
                <tr> 
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {sortData.map((item, index) => (<React.Fragment key={index}>
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                </React.Fragment>))}
            </tbody>
        </table>
    </div>
  )
}

export default Test