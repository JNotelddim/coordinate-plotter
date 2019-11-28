import React from "react";
import Grid from "./Grid";

const DEFAULT_SIZE = 15;
const createGrid = (height, width) => {
  let grid = [[]];
  for (let y = 0; y < height; y++) {
    if (y >= grid.length) grid.push([]);
    for (let x = 0; x < width; x++) {
      grid[y].push("");
    }
  }
  return grid;
};

class App extends React.Component {
  state = {
    grid: {
      height: DEFAULT_SIZE,
      width: DEFAULT_SIZE,
      contents: createGrid(DEFAULT_SIZE, DEFAULT_SIZE)
    },
    snakes: ["A"]
  };

  getNextCellValue = () => {
    return "clicked";
  };

  onCellClick = (x, y) => {
    console.log("x: " + x + "y: " + y);
    console.log(this.state);
    let nextValue = this.getNextCellValue();
    let newGrid = this.state.grid;
    newGrid.contents[y][x] = nextValue;

    this.setState({ grid: newGrid });
  };

  render() {
    return (
      <div>
        <Grid gridConfig={this.state.grid} onCellClick={this.onCellClick} />
      </div>
    );
  }
}

export default App;
