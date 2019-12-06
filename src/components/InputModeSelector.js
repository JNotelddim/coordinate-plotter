import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setInputMode } from "../state/grid/grid.actions";
import * as gridTypes from "../state/grid/grid.types";
import Button from "./Button";

const Container = styled.div``;

const InputModeSelector = ({ snakes, inputMode, setInputMode }) => {
  let inputModeOptions = [
    gridTypes.CLEAR_INPUT_MODE,
    gridTypes.FOOD_INPUT_MODE,
    ...snakes
  ];

  const modeOptionButtons = inputModeOptions.map((option, i) => (
    <Button
      key={i}
      onClick={() => setInputMode(option)}
      selected={inputMode === option}
    >
      {option.name}
    </Button>
  ));

  return <Container>{modeOptionButtons}</Container>;
};

const mapStateToProps = state => {
  return { snakes: state.snakes, inputMode: state.grid.inputMode };
};

export default connect(mapStateToProps, { setInputMode })(InputModeSelector);
