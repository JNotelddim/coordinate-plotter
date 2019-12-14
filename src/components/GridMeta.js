import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { updateGridHeight, updateGridWidth } from "../state/grid/grid.actions";
import { Grid } from "@material-ui/core";

const MetaSection = styled(Grid)`
  background: lightgrey;
  padding: 10px 5px;
  margin: 10px 0px;
`;

const GridMeta = ({ height, width, updateGridHeight, updateGridWidth }) => {
  return (
    <MetaSection container item direction="row">
      <Grid item xs={6}>
        <label>Height:</label>
        <input
          value={height}
          onChange={e => updateGridHeight(e.target.value)}
          type="number"
          min="0"
        />
      </Grid>
      <Grid item xs={6}>
        <label>Width:</label>
        <input
          value={width}
          onChange={e => updateGridWidth(e.target.value)}
          type="number"
          min="0"
        />
      </Grid>
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
