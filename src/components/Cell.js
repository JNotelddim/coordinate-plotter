import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { setCellContents } from "../state/grid/grid.actions";

const CellWrapper = styled.div`
  background: #eee;
  border: 1px solid black;
  text-align: center;
  padding: 0;
  height: ${props => (props.height ? props.height : 25)}px;
  width: ${props => (props.height ? props.height : 25)}px;
  cursor: pointer;
`;

const Cell = ({ x, y, value, setCellContents, inputMode, height }) => {
  return (
    <CellWrapper
      onClick={() => setCellContents(inputMode, x, y)}
      height={height}
    >
      {value.id}
    </CellWrapper>
  );
};

Cell.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.shape({
    id: PropTypes.string,
    order: PropTypes.number
  }),
  setCellContents: PropTypes.func,
  inputMode: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string }),
  height: PropTypes.number
};

const mapStateToProps = state => ({
  inputMode: state.grid.inputMode
});

export default connect(mapStateToProps, { setCellContents })(Cell);
