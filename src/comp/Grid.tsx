import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import {ICell} from '../config/typings.config'


interface Row {
    cells: ICell[],
    rowName: string
}

const cellHeight = 25;
const Table = styled.table`
    { 
        margin: 50px;
        border: 1px solid black;

        td {
            background-color: #efefef;
            height: ${cellHeight}px;
            width: ${cellHeight}px;
            text-align: center;
        }
    }
`

const Grid: React.FC = () => {
  
  let rows: Row[]  = [...Array(15)].map((x) => { 
      let cells: ICell[] = [...Array(15)].map((x, i) =>{
        return { key: i, value: ""}
      })
      return { cells: cells, rowName: x } 
  })

  return (
    <div className="grid">
        <Table>
            <thead>
                                
            </thead>
            
            <tbody>
                {rows.map((row, i) => 
                    <tr key={i}>
                        {row.cells.map((cell, j) => 
                            <Cell key={j} value={""}></Cell>
                        )}
                    </tr>
                )}
            </tbody>
            
        </Table>
    </div>

  );
}

export default Grid;
