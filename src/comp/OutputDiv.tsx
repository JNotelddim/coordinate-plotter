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

    static getDerivedStateFromProps(props: {stateObject: GridState}, state: GridState){

        let newState = {
            snakes: props.stateObject.snakes,
            foods: props.stateObject.foods
        }

        return newState
    }

    render(){
        return <StyledDiv>
                <p> Snakes : {this.state.snakes.join(',')} </p>
                <p> Foods : {this.state.foods.join(',')} </p>
            </StyledDiv> 
    }
}
