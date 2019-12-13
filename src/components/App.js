import React from "react";
import styled from "styled-components";

import BoardGrid from "./Grid";
import Output from "./Output";
import GridMeta from "./GridMeta";
import InputModeSelector from "./InputModeSelector";
// import Snakes from './Snakes';

const Container = styled.div`
  height: auto;
  padding: 10px;
`;

const App = () => {
  return (
    <Container>
      <BoardGrid />
      <GridMeta />
      <InputModeSelector />
      <Output />
    </Container>
  );
};

export default App;
