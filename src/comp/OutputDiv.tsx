import React, { Component } from 'react';
import styled from 'styled-components';

import { GridState } from '../config/typings.config'

const StyledDiv = styled.div`
    width: 100%;
    height: 50px;
    background: #ddd
`

export default class OutputDiv extends Component<{stateObject: GridState}> {
    state: {
        snakes: string[]
        foods: string[]
    }

    constructor(props: { stateObject: GridState}){
        super(props);
        console.log(props)
        
        this.state = {
            snakes: props.stateObject.snakes,
            foods: props.stateObject.foods
        }
    }

    componentWillReceiveProps(props: {stateObject: GridState}){
        this.setState({
            snakes: props.stateObject.snakes,
            foods: props.stateObject.foods
        })
    }

    render(){
        return <StyledDiv>
                <p> Snakes : {this.state.snakes} </p>
                <p> Foods : {this.state.foods} </p>
            </StyledDiv> 
    }
}
