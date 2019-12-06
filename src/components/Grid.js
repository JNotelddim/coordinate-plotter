import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Cell from "./Cell";
import GridMeta from "./GridMeta";
import InputModeSelector from "./InputModeSelector";

const Wrapper = styled.div.attrs({ id: "grid-wrapper" })`
  border: 1px solid grey;
  border-radius: 3px;
  padding: 15px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${props => props.numCols + 1},
    ${props => (props.rowHeight ? props.rowHeight + "px" : "6%")}
  );
  grid-template-rows: repeat(
    ${props => props.numRows + 1},
    ${props => (props.rowHeight ? props.rowHeight + "px" : "6%")}
  );
  margin-bottom: 0;
`;

const Grid = ({ grid }) => {
  const [cellHeight, setCellHeight] = useState(null);
  const { height, width, contents } = grid;

  const headers = Array(width + 1)
    .fill(0)
    .map((empty, i) => <div key={i}>{i === 0 ? "" : i - 1}</div>);

  useEffect(() => {
    let elHeight = document.getElementById("grid-wrapper").clientWidth * 0.5;
    console.log(`cell height: ${elHeight / height}`);
    setCellHeight(elHeight / height);
  }, [height]);

  return (
    <Wrapper>
      <GridMeta>
        Grid -- h: {height}, w: {width}
      </GridMeta>
      <StyledGrid rowHeight={cellHeight} numRows={height} numCols={width}>
        {headers}
        {contents.map((row, y) => (
          <React.Fragment key={y}>
            <span>{y}</span>
            {row.map((cell, x) => (
              <Cell key={x} x={x} y={y} height={cellHeight} value={cell}></Cell>
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
