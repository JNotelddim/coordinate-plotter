import React from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import styled, { css } from "styled-components";

import { setInputMode } from "../state/grid/grid.actions";
import { snakesDetailsSelector } from "../state/snakes/snakes.reducers";

const SnakeWrapper = styled(Grid)`
  cursor: pointer;
  padding: 4px 24px;
  width: 100%;
  min-height: 50px;
  ${({ isselected }) =>
    css`
      background-color: ${isselected === "true" ? "aliceblue" : ""};
    `}
`;

export const SnakeSection = ({ snake, isselected }) => {
  const dispatch = useDispatch();

  return (
    <SnakeWrapper
      item
      isselected={isselected.toString()}
      onClick={() => dispatch(setInputMode(snake))}
      xs={12}
    >
      <b>{snake.name}</b>
      <p>{snake.id !== "" ? snake.coordinates.join(", ") : ""}</p>
    </SnakeWrapper>
  );
};

const Snakes = ({ snakes, inputMode }) => {
  const snakeSections = snakes.map(snake => (
    <SnakeSection
      snake={snake}
      isselected={snake === inputMode}
      key={snake.id}
    />
  ));

  return (
    <Grid container item>
      {snakeSections}
    </Grid>
  );
};

SnakeSection.propTypes = {
  snake: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    coordinates: PropTypes.array
  }),
  isselected: PropTypes.bool
};

Snakes.propTypes = {
  snakes: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
  ),
  inputMode: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
};

const mapStateToProps = state => {
  return {
    snakes: snakesDetailsSelector(state),
    inputMode: state.grid.inputMode
  };
};

export default connect(mapStateToProps)(Snakes);
