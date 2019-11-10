import React, { Component } from 'react';
import { IRow, ICell } from '../config/typings.config'
import Cell from './Cell';

class TRow extends Component<IRow>{
    cells: ICell[]
    cellRefs: any[]
    index: number

    constructor(props: IRow){
        super(props);
        this.cells = props.cells
        this.index = props.index
        this.cellRefs = Array(props.cells.length).map(() => React.createRef())
    }

    render(){
        return <tr key={this.index}>
                    <td className="row-header">{this.index}</td>
                    {this.cells.map((cell, j) => 
                        <Cell key={j} cellKey={j} value={""} ref={this.cellRefs[j]}></Cell>
                    )}
                </tr>
    }
};

export default TRow;
