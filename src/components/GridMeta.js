import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { updateGridHeight, updateGridWidth } from "../state/grid/grid.actions";

const MetaSection = styled.section`
  background: lightgrey;
  padding: 10px 5px;
  margin: 10px 0px;
`;
const GridMeta = ({ height, width, updateGridHeight, updateGridWidth }) => {
  return (
    <MetaSection>
      <label>Height:</label>
      <input
        value={height}
        onChange={e => updateGridHeight(e.target.value)}
        type="number"
        min="0"
      />
      <label>Width:</label>
      <input
        value={width}
        onChange={e => updateGridWidth(e.target.value)}
        type="number"
        min="0"
      />
    </MetaSection>
  );
};

GridMeta.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  updateGridHeight: PropTypes.func,
  updateGridWidth: PropTypes.func
};

const mapStateToProps = state => {
  return { height: state.grid.height, width: state.grid.width };
};

export default connect(mapStateToProps, { updateGridHeight, updateGridWidth })(
  GridMeta
);
