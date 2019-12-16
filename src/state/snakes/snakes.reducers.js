import { FOOD_INPUT_MODE, CLEAR_INPUT_MODE } from "../grid/grid.types";
import { DELETE_SNAKE, ADD_SNAKE, EDIT_SNAKE } from "./snakes.types";

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
    case DELETE_SNAKE:
      console.log(`Deleting snake w/ id: ${action.payload}`);
      // const newSnakes = state.filter(s => s.id !== action.payload);
      // console.log(newSnakes);
      return [...state.filter(snake => snake.id !== action.payload)];
    case ADD_SNAKE:
      return [...state, action.payload];
    case EDIT_SNAKE:
      return [
        ...state.snakes.map(snake =>
          snake.id !== action.payload.id ? snake : action.payload
        )
      ];

    default:
      return state;
  }
};

export const snakeWithCoordinateSelector = (appState, id) => {
  const filteredSnake = appState.snakes.filter(s => s.id === id);
  if (!filteredSnake.length) {
    return null;
  }

  const snake = { ...filteredSnake[0] };
  const coordinatesByRows = appState.grid.contents.map((row, y) => {
    const rowCells = [];
    row.forEach((cell, x) => {
      if (cell.id === id) {
        rowCells.push({ order: cell.order, coords: `(${x},${y})` });
      }
    });
    return rowCells;
  });

  const flatCoordinates = coordinatesByRows.reduce((prev, curr) =>
    prev.concat(curr)
  );

  const orderedCoordinates = flatCoordinates.sort((a, b) => {
    if (a.order < b.order) return -1;
    if (a.order > b.order) return 1;
    return 0;
  });

  snake.coordinates = orderedCoordinates.map(c => c.coords);
  console.log(snake);

  return snake;
};

export default snakesReducer;
