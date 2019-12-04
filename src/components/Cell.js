import React from "react";
import { connect } from "react-redux";
import { setCellContents } from "../state/grid/grid.actions";

const Cell = ({ x, y, value, setCellContents, inputMode }) => {
  return <td onClick={() => setCellContents(inputMode, x, y)}>{value}</td>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    setCellContents,
    ...ownProps,
    inputMode: state.grid.inputMode
  };
};

export default connect(mapStateToProps, { setCellContents })(Cell);
