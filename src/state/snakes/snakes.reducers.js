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

export default snakesReducer;
