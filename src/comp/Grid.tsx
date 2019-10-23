import React, { Component } from 'react';
import styled from 'styled-components';

import { ICell, IGrid, IRow} from '../config/typings.config'
import TRow from './TRow';

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

        td.row-header {
            background-color: #fff;
            font-weight: bold;
        }
    }
`

class Grid extends Component<IGrid> {
 
    rows: IRow[]
    height: number
    width?: number

    constructor(props: IGrid){
        super(props);

        this.height = props.height;
        this.width = props.width ? props.width : this.height;
        
        this.rows = [...Array(this.height)].map((x, j) => { 
          let cells: ICell[] = [...Array(this.width)].map((x, i) =>{
            return { key: i, value: ""}
          })
          return { cells: cells, index: j} 
        })
    
    }

    render(){
        return (
            <div className="grid">
                <Table>
                    <thead>
                        <th></th>
                        {this.rows[0].cells.map((cell, j) => 
                            <th>{j}</th>
                        )}
                    </thead>
                    
                    <tbody>
                        {this.rows.map((row, i) => 
                            <TRow cells={row.cells} index={row.index}></TRow>
                        )}
                    </tbody>
                    
                </Table>
            </div>
        );
    }
}

export default Grid;
