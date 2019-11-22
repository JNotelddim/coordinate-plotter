import React, { Component } from 'react';
import {ICell} from '../config/typings.config'

const CELL_VALUES = ["", "x", "f"]

export default class Cell extends Component<ICell>  {
    state: {
        key: number,
        value: any
    }

    constructor(props: ICell){
        super(props);
        this.state = {
            key: props.cellKey,
            value: props.value
        }
    }

    onClick(e: React.MouseEvent){
        this.setState({
            key: this.state.key, 
            value: this.getNextCellValue()
        });
    }

    getNextCellValue(){
        let currentValueIndex = CELL_VALUES.indexOf(this.state.value);
        let newValueIndex = currentValueIndex >= CELL_VALUES.length ? 0 : currentValueIndex + 1
        let newValue = CELL_VALUES[newValueIndex]
        return newValue;
    }

    render(){
        return <td key={this.state.key} onClick={this.onClick.bind(this)}> {this.state.value} </td>
    }
}
