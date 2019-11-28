import React from "react";
import Grid from "./Grid";
import Output from "./Output";

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
    snakes: ["Snake1"]
  };

  getNextCellValue = current => {
    let potentialCellValues = ["", "f", ...this.state.snakes];
    let currentIndex = potentialCellValues.indexOf(current);
    if (currentIndex < 0) return potentialCellValues[0];

    let nextIndex =
      currentIndex >= potentialCellValues.length ? 0 : currentIndex + 1;
    return potentialCellValues[nextIndex];
  };

  onCellClick = (x, y) => {
    let currentValue = this.state.grid.contents[y][x];
    let nextValue = this.getNextCellValue(currentValue);
    let newGrid = this.state.grid;
    newGrid.contents[y][x] = nextValue;

    this.setState({ grid: newGrid });
  };

  render() {
    return (
      <div>
        <div>Snakes: {this.state.snakes.join(",")}</div>
        <Grid gridConfig={this.state.grid} onCellClick={this.onCellClick} />
        <Output gridContents={this.state.grid.contents} />
      </div>
    );
  }
}

export default App;
