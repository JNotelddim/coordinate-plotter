import React from 'react';
import styled from 'styled-components';

import Grid from './comp/Grid';
import OutputDiv from './comp/OutputDiv';
import './App.css';
import { GRID_DEFAULT_HEIGHT, AppState, IRow } from './config/typings.config'

const Margin = styled.div`
    margin: 50px;
`
const defaultState = {
    gridState: {
        snakes: [],
        foods: []
    }
}


class App extends React.Component{
    rows: IRow[]
    grid: any
    outputDiv: any
    state: any


    constructor(props: AppState){
        super(props)
        console.log(props)
        console.log(this.state);

        this.grid = React.createRef();
        this.outputDiv = React.createRef();
        this.state = defaultState;
        console.log(this.state);

        this.rows = Grid.initializeGrid(GRID_DEFAULT_HEIGHT, GRID_DEFAULT_HEIGHT);

    }

    showGridState(){
        let newState = {
            gridState: this.grid.current.getStateObject()
        }
        console.log(newState);
        this.setState(newState);
    }

    render(){
        console.log(this.state)

        return (
            <Margin>
                <Grid 
                    rows={this.rows} 
                    ref={this.grid}>
                </Grid>
                
                <button 
                    onClick={this.showGridState.bind(this)}>Show Grid State
                </button>
                
                <OutputDiv 
                    stateObject={this.state.gridState} 
                    ref={this.outputDiv}>
                </OutputDiv>
            </Margin>
        );
    }
}

export default App;
