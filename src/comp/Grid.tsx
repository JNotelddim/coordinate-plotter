import React, { Component } from 'react';
import styled from 'styled-components';

import { ICell, IGrid, IRow} from '../config/typings.config'
import TRow from './TRow';

const cellHeight = 25;
const Table = styled.table`
    { 
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
    rowRefs: any[]

    constructor(props: IGrid){
        super(props);
        this.rows = props.rows;
        this.rowRefs = Array(props.rows.length).map(() => React.createRef())
    }

    static initializeGrid(width: number, height: number){
        //create a 2D array of cells to represent the grid
        let grid = [...Array(height)].map((x, j) => { 
          let cells: ICell[] = [...Array(width)].map((x, i) =>{
            return { cellKey: i, value: ""}
          })
          return { cells: cells, index: j} 
        })
    
        return grid
    }

    getStateObject(){
        let snakes = []
        let foods = []

        for(let r=0; r < this.rowRefs.length; r++){
            let row = this.rowRefs[r]

            for(let c=0; c < row.cellRefs.length; c++){
                let cell = row.cellRefs[c]

                if(!cell.value)
                    continue;

                if(cell.value === "x")
                    snakes.push("(" + c + "," + r + ")")
                
                if(cell.value === "f")
                    foods.push("(" + c + "," + r + ")")
            }
        }

        //let jsonObject = {snakes: snakes.join(','), foods: foods.join(',')}
        let jsonObject = {snakes: snakes, foods: foods}

        //return JSON.stringify(jsonObject);
        return jsonObject;
    }

    render(){
        return (
            <div className="grid">
                <Table>
                    <thead>
                        <tr>
                            <th key={-1}></th>
                            {this.rows[0].cells.map((cell, j) => 
                                <th key={j}>{j}</th>
                            )}
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.rows.map((row, i) => 
                            <TRow 
                                cells={row.cells} 
                                index={row.index} 
                                key={i} 
                                ref={(ref) => { this.rowRefs[i] = ref; return true;} }>
                            </TRow>
                        )}
                    </tbody>
                    
                </Table>
            </div>
        );
    }
}


export default Grid;
