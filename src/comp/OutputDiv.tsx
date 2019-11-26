import React, { Component } from 'react';
import styled from 'styled-components';

import { IAppState, IOutput } from '../config/typings.config'
import { AppState } from 'react-native';

const StyledDiv = styled.div`
    width: 100%;
    height: 50px;
    background: #ddd
`

export default class OutputDiv extends Component<{stateObject: IAppState}> {
    state: {
        snakes: string[]
        foods: string[]
    }

    constructor(props: { stateObject: IAppState}){
        super(props);
        console.log(props)
        
        this.state = OutputDiv.gatherSnakesAndFoodsFromAppState(props.stateObject)
    }
    
    static gatherSnakesAndFoodsFromAppState(appState: IAppState): IOutput{
        let outputObject: IOutput = {
            snakes: [],
            foods: []
        }

        for(let i = 0; i < appState.height; i++){
            let row = appState.gridState.cellRows[i]

            for(let j = 0; j < appState.width; j++){
                let cell = row[j]

                switch(cell.value){
                    case "x":
                        outputObject.snakes.push("("+j+","+i+")")
                        break;
                    
                    case "f":
                        outputObject.foods.push("("+j+","+i+")")
                        break;

                    case "":
                    default:
                        break;

                }

            }
        }

        return outputObject
    }

    static getDerivedStateFromProps(props: {stateObject: IAppState}, state: IAppState){
        let newState = OutputDiv.gatherSnakesAndFoodsFromAppState(props.stateObject)
        return newState
    }

    render(){
        return <StyledDiv>
                <p> Snakes : {this.state.snakes.join(',')} </p>
                <p> Foods : {this.state.foods.join(',')} </p>
            </StyledDiv> 
    }
}
