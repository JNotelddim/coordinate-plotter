import { ADD_SNAKE, EDIT_SNAKE, DELETE_SNAKE } from "./snakes.types";

const addSnake = (id, name) => ({
  type: ADD_SNAKE,
  payload: { id, name }
});

const editSnake = (id, name) => ({
  type: EDIT_SNAKE,
  payload: { id, name }
});

const deleteSnake = id => ({
  type: DELETE_SNAKE,
  payload: id
});

export { addSnake, editSnake, deleteSnake };
