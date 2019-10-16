import React from 'react';
import styled from 'styled-components';


interface Cell {
    value: string 
}

interface Row {
    cells: Cell[],
    rowName: string
}

const Table = styled.table`
    margin: 50px;
    border: 1px solid black;
`

const Grid: React.FC = () => {
  let rows: Row[]  = [...Array(15)].map((x) => { 
      let cells: Cell[] = [...Array(15)].map((x) =>{
        return { value: "" }
      })
      return { cells: cells, rowName: x } 
  })

  return (
    <div className="grid">
        <Table>
            <tbody>
                {rows.map((row, i) => 
                    <tr key={i}>
                        {row.cells.map((cell, j) => 
                            <td key={j}>0</td>
                        )}
                    </tr>
                )}
            </tbody>
            
        </Table>
    </div>

  );
}

export default Grid;
