import React from 'react';
import Grid from './comp/Grid';
import './App.css';
import { GRID_DEFAULT_HEIGHT } from './config/typings.config'

class App extends React.Component{
    rows: any[]
    grid: any

    constructor(props: any){
        super(props)
        this.rows = Grid.initializeGrid(GRID_DEFAULT_HEIGHT, GRID_DEFAULT_HEIGHT);
        this.grid = React.createRef();//{getJsonState: () => "test"}
    }

    render(){
        return (
            <div>
                <Grid rows={this.rows} ref={this.grid}></Grid>
                <button onClick={() => alert(this.grid.current.getJsonState())}>Show Grid State</button>
            </div>
        );
    }
}

export default App;
