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

const updateContentsHeight = (newHeight, oldHeight, width, oldContents) => {
  //create new 2D array same as existing one
  let newHeightContents = [...oldContents];

  //if height is now less, chop off n rows at end
  if (newHeight < oldHeight) {
    newHeightContents = newHeightContents.splice(0, newHeight);
  } else if (newHeight > oldHeight) {
    // if height is now greater, create empty rows filled w/ empty cells
    let newRows = Array(newHeight - oldHeight)
      .fill(0)
      .map(() => {
        return Array(width).fill("");
      });
    newHeightContents.push(...newRows);
  }

  return newHeightContents;
};

const updateContentsWidth = (newWidth, oldWidth, oldContents) => {
  //create new 2D array same as existing one
  let newWidthContents = [...oldContents];

  //if width is now less, truncate each row's contents to end sooner
  if (newWidth < oldWidth) {
    newWidthContents = newWidthContents.map(row => {
      let newRow = row.splice(0, newWidth);
      return newRow;
    });
  } else if (newWidth > oldWidth) {
    //width increased, append empty cells to each row
    newWidthContents.map(row =>
      row.push(...Array(newWidth - oldWidth).fill(""))
    );
  }

  return newWidthContents;
};

const gridReducer = (state = DEFAULT_GRID_STATE, action) => {
  switch (action.type) {
    case types.SET_INPUT_MODE:
      return { ...state, inputMode: action.payload };

    case types.UPDATE_HEIGHT:
      let newHeight = parseInt(action.payload);

      if (isNaN(newHeight)) return state;
      let newHeightContents = updateContentsHeight(
        newHeight,
        state.height,
        state.width,
        state.contents
      );

      return { ...state, height: newHeight, contents: newHeightContents };

    case types.UPDATE_WIDTH:
      let newWidth = parseInt(action.payload);

      if (isNaN(newWidth)) return state;

      let newWidthContents = updateContentsWidth(
        newWidth,
        state.width,
        state.contents
      );

      return { ...state, width: newWidth, contents: newWidthContents };

    case types.SET_CELL_CONTENTS:
      let newCellValueContents = [...state.contents];
      let { x, y, newValue } = action.payload;
      console.log(`${x},${y}`);
      newCellValueContents[y][x] = newValue.id;
      console.log(newCellValueContents);
      return { ...state, contents: newCellValueContents };

    default:
      return state;
  }
};

export default gridReducer;
