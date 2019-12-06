import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Cell from "./Cell";
import InputModeSelector from "./InputModeSelector";

let Wrapper = styled.div`
  border: 1px solid grey;
  padding: 15px;
`;

let StyledGrid = styled.div`
  display: grid;
  height: 600px;
  width: 600px;
  grid-template-columns: repeat(16, 6%);
  grid-template-rows: repeat(16, 6%);
`;

let GridMeta = styled.section`
  background: aliceblue;
  margin-bottom: 15px;
`;

const Grid = ({ grid }) => {
  let { height, width, contents } = grid;

  let headers = Array(contents.length + 1)
    .fill(0)
    .map((empty, i) => <div key={i}>{i === 0 ? "" : i - 1}</div>);

  return (
    <Wrapper>
      <GridMeta>
        Grid -- h: {height}, w: {width}
      </GridMeta>
      <StyledGrid>
        {headers}
        {contents.map((row, y) => (
          <React.Fragment key={y}>
            <span>{y}</span>
            {row.map((cell, x) => (
              <Cell key={x} x={x} y={y} value={cell}></Cell>
            ))}
          </React.Fragment>
        ))}
      </StyledGrid>
      <InputModeSelector />
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return { grid: state.grid };
};

export default connect(mapStateToProps)(Grid);
