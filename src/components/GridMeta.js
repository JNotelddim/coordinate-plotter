import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { updateGridHeight, updateGridWidth } from "../state/grid/grid.actions";

const MetaSection = styled.section`
  background: lightgrey;
  padding: 10px 5px;
  margin: 10px 0px;
`;
const GridMeta = ({ height, width, updateGridHeight, updateGridWidth }) => {
  console.log(height);
  return (
    <MetaSection>
      <label>Height:</label>
      <input
        value={height}
        onChange={e => updateGridHeight(e.target.value)}
        type="number"
      />
    </MetaSection>
  );
};

const mapStateToProps = state => {
  return { height: state.grid.height, width: state.grid.width };
};

export default connect(mapStateToProps, { updateGridHeight, updateGridWidth })(
  GridMeta
);
