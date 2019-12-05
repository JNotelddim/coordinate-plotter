import * as types from "./grid.types";

const setCellContents = (newValue, x, y) => {
  return { type: types.SET_CELL_CONTENTS, payload: { newValue, x, y } };
};

const updateGridHeight = newHeight => {
  return { type: types.UPDATE_HEIGHT, payload: newHeight };
};

const updateGridWidth = newWidth => {
  return { type: types.UPDATE_WIDTH, payload: newWidth };
};

const setInputMode = newInputMode => {
  return { type: types.SET_INPUT_MODE, payload: newInputMode };
};

export { updateGridHeight, updateGridWidth, setCellContents, setInputMode };
