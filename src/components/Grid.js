import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import Cell from "./Cell";

const Wrapper = styled.div.attrs({ id: "grid-wrapper" })`
  width: auto;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 15px;
  margin: 15px;
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
    const clientHeight = document.documentElement.clientHeight * 0.67;

    const greaterGridDimension = height > width ? height : width;
    const newCellHeight = clientHeight / greaterGridDimension;
    setCellHeight(newCellHeight);
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
