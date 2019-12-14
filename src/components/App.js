import React from "react";
import Grid from "@material-ui/core/Grid";

import BoardGrid from "./Grid";
import GridMeta from "./GridMeta";
import Snakes from "./Snakes";

const App = () => {
  return (
    <Grid container direction="row">
      <Grid item md={8} lg={6}>
        <BoardGrid />
      </Grid>

      <Grid container item md={4} lg={6}>
        <GridMeta />
        <Snakes />
      </Grid>
    </Grid>
  );
};

export default App;
