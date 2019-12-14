import React from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";

import { setInputMode } from "../state/grid/grid.actions";

export const SnakeSection = ({ snake, isSelected }) => {
  const dispatch = useDispatch();
  const Wrapper = styled.div`
    background-color: ${isSelected ? "aliceblue" : ""};
  `;

  return (
    <Grid item onClick={() => dispatch(setInputMode(snake))} xs={12}>
      <Wrapper>
        <b>{snake.name}</b>
      </Wrapper>
    </Grid>
  );
};

const Snakes = ({ snakes, inputMode }) => {
  const snakeSections = snakes.map(snake => (
    <SnakeSection
      snake={snake}
      isSelected={snake === inputMode}
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
  snake: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string }),
  isSelected: PropTypes.bool
};

Snakes.propTypes = {
  snakes: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
  ),
  inputMode: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
};

const mapStateToProps = state => {
  return { snakes: state.snakes, inputMode: state.grid.inputMode };
};

export default connect(mapStateToProps)(Snakes);
