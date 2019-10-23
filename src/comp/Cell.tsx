import React, { Component } from 'react';
import {ICell} from '../config/typings.config'

export default class Cell extends Component<ICell>  {
    key: number
    value: any

    constructor(props: ICell){
        super(props);
        this.key = props.key;
        this.value = props.value;
    }

    render(){
        return <td key={this.key}> {this.value} </td>
    }
}
