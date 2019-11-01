import React from 'react';
import Grid from './comp/Grid';
import './App.css';
import { GRID_DEFAULT_HEIGHT } from './config/typings.config'

const App: React.FC = () => {

    let grid = Grid.initializeGrid(GRID_DEFAULT_HEIGHT, GRID_DEFAULT_HEIGHT);

    return (
        <Grid rows={grid}></Grid>
    );
}

export default App;
