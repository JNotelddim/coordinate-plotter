import React from 'react';


interface Cell {
    value: string 
}

interface Row {
    cells: Cell[],
    rowName: string
}

const Grid: React.FC = () => {
  let rows: Row[]  = [...Array(15)].map((x) => { 
      let cells: Cell[] = [...Array(15)].map((x) =>{
        return { value: "" }
      })
      return { cells: cells, rowName: x } 
  })

  return (
    <div className="grid">
        <table>
            <tbody>
                {rows.map((row, i) => 
                    <tr key={i}>
                        {row.cells.map((cell, j) => 
                            <td key={j}>0</td>
                        )}
                    </tr>
                )}
            </tbody>
            
        </table>
    </div>

  );
}

export default Grid;
