import React from 'react';
import Grid from './comp/Grid';
import './App.css';
import { GRID_DEFAULT_HEIGHT } from './config/typings.config'

const App: React.FC = () => {
  return (
      <Grid height={GRID_DEFAULT_HEIGHT}></Grid>
  );
}

export default App;
