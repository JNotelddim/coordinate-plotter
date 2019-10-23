import React, { Component } from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import { ICell, IGrid } from '../config/typings.config'


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

class Grid extends Component<IGrid> {
 
    rows: Row[]
    height: number
    width?: number

    constructor(props: IGrid){
        super(props);

        this.height = props.height;
        this.width = props.width ? props.width : this.height;
        
        this.rows = [...Array(this.height)].map((x) => { 
          let cells: ICell[] = [...Array(this.width)].map((x, i) =>{
            return { key: i, value: ""}
          })
          return { cells: cells, rowName: x } 
        })
    
    }

    render(){
        return (
            <div className="grid">
                <Table>
                    <thead>
                        
                    </thead>
                    
                    <tbody>
                        {this.rows.map((row, i) => 
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
}

export default Grid;
