import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setInputMode } from "../state/grid/grid.actions";

let Container = styled.div`
  margin: 15px;
  background-color: aliceblue;
`;

const InputModeSelector = ({ snakes, inputMode, setInputMode }) => {
  let inputModeOptions = ["", "Food", ...snakes];
  let modeOptionButtons = inputModeOptions.map((option, i) => (
    <button
      key={i}
      onClick={() => setInputMode(option)}
      className={`ui button ${inputMode === option ? "primary" : ""}`}
    >
      {option === "" ? "(Clear)" : option}
    </button>
  ));

  return <Container>{modeOptionButtons}</Container>;
};

const mapStateToProps = state => {
  return { snakes: state.snakes, inputMode: state.grid.inputMode };
};

export default connect(mapStateToProps, { setInputMode })(InputModeSelector);
