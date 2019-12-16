import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import Cell from "./Cell";

const Wrapper = styled.div.attrs({ id: "grid-wrapper" })`
  border: 1px solid grey;
  border-radius: 3px;
  padding: 15px;
  margin: 15px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.numCols + 1}, 1fr);
  grid-column-gap: 0;
  grid-template-rows: repeat(${props => props.numRows + 1}, 1fr);
  grid-row-gap: 0;
  margin-bottom: 0;
`;

const Grid = ({ grid }) => {
  const [cellHeight, setCellHeight] = useState(null);
  const { height, width, contents } = grid;

  const headers = Array(width + 1)
    .fill(0)
    .map((empty, i) => <div key={i}>{i === 0 ? "" : i - 1}</div>);

  useEffect(() => {
    const gridWrapper = document.getElementById("grid-wrapper");
    setCellHeight((gridWrapper.clientWidth * 0.8) / width);
  }, [height, width]);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

Grid.propTypes = {
  grid: PropTypes.object
};

const mapStateToProps = state => {
  return { grid: state.grid };
};

export default connect(mapStateToProps)(Grid);
