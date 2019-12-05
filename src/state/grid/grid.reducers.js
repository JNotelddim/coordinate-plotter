import * as types from "./grid.types";

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

const DEFAULT_HEIGHT = 15;
const DEFAULT_GRID_STATE = {
  height: DEFAULT_HEIGHT,
  width: DEFAULT_HEIGHT,
  contents: createGrid(DEFAULT_HEIGHT, DEFAULT_HEIGHT), //TODO: intializeGrid(15, 15)
  inputMode: types.FOOD_INPUT_MODE
};

const gridReducer = (state = DEFAULT_GRID_STATE, action) => {
  switch (action.type) {
    case types.SET_INPUT_MODE:
      console.log(action.payload);
      return { ...state, inputMode: action.payload };

    case types.UPDATE_HEIGHT:
      let newHeight = action.payload;
      let newHeightContents = [...state.contents].splice(0, newHeight);
      return { ...state, height: newHeightContents };

    case types.UPDATE_WIDTH:
      let newWidth = action.payload;
      let newWidthContents = [...state.contents].map(row =>
        row.splice(0, newWidth)
      );
      return { ...state, width: newWidth, newContents: newWidthContents };

    case types.SET_CELL_CONTENTS:
      let newCellValueContents = [...state.contents];
      let { x, y, newValue } = action.payload;
      newCellValueContents[y][x] = newValue.id;
      console.log(newValue);
      return { ...state, contents: newCellValueContents };

    default:
      return state;
  }
};

export default gridReducer;
