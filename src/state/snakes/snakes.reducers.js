const DEFAULT_SNAKES_STATE = [
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
