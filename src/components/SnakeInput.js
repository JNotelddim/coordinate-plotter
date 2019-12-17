import React from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import styled, { css } from "styled-components";

import { setInputMode } from "../state/grid/grid.actions";
import { CLEAR_INPUT_MODE, FOOD_INPUT_MODE } from "../state/grid/grid.types";
import { snakeWithCoordinateSelector } from "../state/snakes/snakes.reducers";
import { deleteSnake } from "../state/snakes/snakes.actions";

export const SnakeWrapper = styled(Grid)`
  cursor: pointer;
  padding: 4px 24px;
  width: 100%;
  min-height: 50px;
  ${({ isselected }) =>
    css`
      background-color: ${isselected === "true" ? "aliceblue" : ""};
    `}
`;

export const DeleteSnakeButton = ({ onClick }) => {
  return (
    <button style={{ float: "right" }} onClick={onClick}>
      Delete
    </button>
  );
};
DeleteSnakeButton.propTypes = {
  onClick: PropTypes.func
};

export const SnakeInput = ({ snake, isselected }) => {
  const dispatch = useDispatch();
  const contents = snake.id !== CLEAR_INPUT_MODE.id && (
    <p>
      {snake.id !== FOOD_INPUT_MODE.id && (
        <DeleteSnakeButton
          id={snake.id}
          onClick={e => {
            e.stopPropagation();
            if (
              window.confirm(`Are you sure you want to delete ${snake.name}`)
            ) {
              dispatch(deleteSnake(snake.id));
            }
          }}
        />
      )}
      {snake.coordinates.join(", ")}
    </p>
  );

  return (
    <SnakeWrapper
      item
      isselected={isselected.toString()}
      onClick={() => dispatch(setInputMode(snake))}
      xs={12}
    >
      <b>{snake.name}</b>
      {contents}
    </SnakeWrapper>
  );
};
SnakeInput.propTypes = {
  snake: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    coordinates: PropTypes.array
  }),
  isselected: PropTypes.bool
};

const mapStateToProps = (state, ownProps) => {
  return {
    snake: snakeWithCoordinateSelector(state, ownProps.id)
  };
};

export default connect(mapStateToProps)(SnakeInput);
