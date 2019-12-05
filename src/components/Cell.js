import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { setCellContents } from "../state/grid/grid.actions";

let Cell = styled.div.attrs(({ x, y, value, inputMode }) => ({
  onClick: () => setCellContents(inputMode, x, y),
  text: { value }
}))`
  background: #eee;
  border: 1px solid black;
`;

/*
const Cell = ({ x, y, value, setCellContents, inputMode }) => {
  return <td onClick={() => setCellContents(inputMode, x, y)}>{value}</td>;
};*/

const mapStateToProps = (state, ownProps) => {
  return {
    setCellContents,
    ...ownProps,
    inputMode: state.grid.inputMode
  };
};

export default connect(mapStateToProps, { setCellContents })(Cell);
