import React from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import styled, { css } from "styled-components";

import { setInputMode } from "../state/grid/grid.actions";

const StyledGrid = styled(Grid)``;

const SnakeWrapper = styled(Grid)`
  cursor: pointer;
  padding: 4px 24px;
  width: 100%;
  ${({ isselected }) =>
    css`
      background-color: ${isselected.toString() === "true" ? "aliceblue" : ""};
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
    <StyledGrid container item>
      {snakeSections}
    </StyledGrid>
  );
};

SnakeSection.propTypes = {
  snake: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string }),
  isselected: PropTypes.bool
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
