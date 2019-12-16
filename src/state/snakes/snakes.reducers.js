import { FOOD_INPUT_MODE, CLEAR_INPUT_MODE } from "../grid/grid.types";

const DEFAULT_SNAKES_STATE = [
  CLEAR_INPUT_MODE,
  FOOD_INPUT_MODE,
  {
    name: "Snake 1",
    id: "s1"
  },
  {
    name: "Snake 2",
    id: "s2"
  }
];
const snakesReducer = (state = DEFAULT_SNAKES_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const snakeWithCoordinateSelector = (appState, id) => {
  const filteredSnake = appState.snakes.filter(s => s.id === id);
  if (!filteredSnake.length) {
    return null;
  }

  const snake = filteredSnake[0];
  const coordinatesByRows = appState.grid.contents.map((row, y) => {
    const rowCells = [];
    row.forEach((cell, x) => {
      if (cell === id) {
        rowCells.push(`(${x},${y})`);
      }
    });
    return rowCells;
  });

  const flatCoordinates = coordinatesByRows.reduce((prev, curr) =>
    prev.concat(curr)
  );

  snake.coordinates = flatCoordinates;

  return snake;
};

export const snakesDetailsSelector = appState => {
  const snakesWCoordinates = appState.snakes.map(s =>
    snakeWithCoordinateSelector(appState, s.id)
  );
  return snakesWCoordinates;
};

export default snakesReducer;
