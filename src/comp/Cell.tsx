import React, { Component } from 'react';
import {ICell} from '../config/typings.config'

const CELL_VALUES = ["", "x", "f"]

export default class Cell extends Component<ICell>  {
    key: number
    value: any

    constructor(props: ICell){
        super(props);
        this.key = props.cellKey;
        this.value = props.value;
    }

    onClick(e: React.MouseEvent){
        this.value = this.getNextCellValue();
        this.setState({});
    }

    getNextCellValue(){
        let currentValueIndex = CELL_VALUES.indexOf(this.value);
        let newValueIndex = currentValueIndex >= CELL_VALUES.length ? 0 : currentValueIndex + 1
        let newValue = CELL_VALUES[newValueIndex]
        return newValue;
    }

    render(){
        return <td key={this.key} onClick={this.onClick.bind(this)}> {this.value} </td>
    }
}
