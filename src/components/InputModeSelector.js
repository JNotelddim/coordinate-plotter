import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { setInputMode } from "../state/grid/grid.actions";

let Container = styled.div`
  margin: 15px;
  background-color: aliceblue;
`;

const InputModeSelector = ({ snakes, setInputMode }) => {
  let inputModeOptions = ["", "Food", ...snakes];
  let modeOptionButtons = inputModeOptions.map((option, i) => (
    <button key={i} onClick={() => setInputMode(option)}>
      {option}
    </button>
  ));

  return <Container>{modeOptionButtons}</Container>;
};

const mapStateToProps = state => {
  let snakes = ["s1", "s2"];
  return { snakes: snakes };
};

export default connect(mapStateToProps, { setInputMode })(InputModeSelector);
