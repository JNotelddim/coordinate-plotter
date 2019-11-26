import React, { Component } from 'react';
import styled from 'styled-components';

import { IGrid, IAppState} from '../config/typings.config'
import Cell from './Cell';

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

class Grid extends Component<{appstate: IAppState}> {
    state: IGrid
    height: number
    width: number

    constructor(props: { appstate: IAppState} ){
        super(props)
        this.state = props.appstate.gridState
        this.height = props.appstate.height
        this.width = props.appstate.width
    }

    render(){
        return (
            <div className="grid">
                <Table>
                    <thead>
                        <tr>
                            <th key={-1}></th>
                            {Array(this.width).fill(0).map((z, j) => 
                                <th key={j}>{j}</th>
                            )}
                        </tr>
                    </thead>
                    
                    <tbody>
                        {this.state.cellRows.map((row, i) => 
                            <tr key={i}>
                                <td className="row-header" key={-1}>
                                    {i}
                                </td>

                               {row.map((cell, j) => 
                                   <Cell
                                        key={j}
                                        cellKey={j}
                                        value={cell.value}>
                                   </Cell>
                               )
                               } 
                            </tr>
                        )}
                    </tbody>
                    
                </Table>
            </div>
        );
    }
}


export default Grid;
