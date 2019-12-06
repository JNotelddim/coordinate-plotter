import React from "react";
import styled from "styled-components";
import Grid from "./Grid";
import Output from "./Output";
// import Snakes from "./Snakes";

let Container = styled.div`
  height: auto;
  padding: 10px;
`;

const App = () => {
  return (
    <Container>
      <Grid />
      {/*<Snakes />*/}
      <Output />
    </Container>
  );
};

export default App;
