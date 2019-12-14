import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import { setInputMode } from "../state/grid/grid.actions";
import * as gridTypes from "../state/grid/grid.types";
import Button from "./Button";

const InputModeSelector = ({ snakes, inputMode, setInputMode }) => {
  const inputModeOptions = [
    gridTypes.CLEAR_INPUT_MODE,
    gridTypes.FOOD_INPUT_MODE,
    ...snakes
  ];

  const modeOptionButtons = inputModeOptions.map((option, i) => (
    <Grid key={i} item xs={3}>
      <Button
        onClick={() => setInputMode(option)}
        selected={inputMode === option}
      >
        {option.name}
      </Button>
    </Grid>
  ));

  return (
    <Grid container item>
      {modeOptionButtons}
    </Grid>
  );
};

InputModeSelector.propTypes = {
  snakes: PropTypes.array,
  inputMode: PropTypes.string,
  setInputMode: PropTypes.func
};

const mapStateToProps = state => {
  return { snakes: state.snakes, inputMode: state.grid.inputMode };
};

export default connect(mapStateToProps, { setInputMode })(InputModeSelector);
