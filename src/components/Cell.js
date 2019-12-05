import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setCellContents } from "../state/grid/grid.actions";

let CellWrapper = styled.div`
  background: #eee;
  border: 1px solid black;
  text-align: center;
  padding: 0;
`;

const Cell = ({ x, y, value, setCellContents, inputMode }) => {
  return (
    <CellWrapper onClick={() => setCellContents(inputMode, x, y)}>
      {value}
    </CellWrapper>
  );
};

const mapStateToProps = state => ({
  inputMode: state.grid.inputMode
});

export default connect(mapStateToProps, { setCellContents })(Cell);
