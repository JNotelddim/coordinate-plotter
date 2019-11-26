import React from 'react';
import styled from 'styled-components';

import Grid from './comp/Grid';
import OutputDiv from './comp/OutputDiv';
import './App.css';
import { GRID_DEFAULT_HEIGHT, IAppState, ICell } from './config/typings.config'

const Margin = styled.div`
    margin: 50px;
`

let constructCellRows: Function = (height: number, width: number) => {
    let rows: ICell[][] = []

    for(let i = 0; i < height; i++){
        let newRow = []
        
        for(let j = 0; j < width; j++){
            let newCell: ICell = {value: "", cellKey: j}
            newRow.push(newCell)
        }
        rows.push(newRow)
    }
    return rows
}

const defaultState: IAppState = {
    gridState: { 
        cellRows: constructCellRows(GRID_DEFAULT_HEIGHT, GRID_DEFAULT_HEIGHT)
    },
    height: GRID_DEFAULT_HEIGHT,
    width: GRID_DEFAULT_HEIGHT
}

class App extends React.Component{
    state: IAppState


    constructor(props: any){
        super(props)

        this.state = defaultState;
        console.log(this.state);
    }

    render(){
        console.log(this.state)

        return (
            <Margin>
                <Grid 
                    appstate={this.state}>
                </Grid>
                
                <OutputDiv 
                    stateObject={this.state}>
                </OutputDiv>
            </Margin>
        );
    }
}

export default App;
