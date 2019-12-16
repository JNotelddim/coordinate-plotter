import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";

import SnakeInput from "./SnakeInput";

export const AddSnakeButton = () => {
  return <button>New Snake</button>;
};

const SnakesOverview = ({ snakes, inputMode }) => {
  console.log(snakes);
  const snakeSections = snakes.map(snake => (
    <SnakeInput id={snake.id} isselected={snake === inputMode} key={snake.id} />
  ));

  return (
    <Grid container item>
      {snakeSections}
    </Grid>
  );
};
SnakesOverview.propTypes = {
  snakes: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
  ),
  inputMode: PropTypes.shape({ name: PropTypes.string, id: PropTypes.string })
};

const mapStateToProps = state => {
  return {
    snakes: state.snakes,
    inputMode: state.grid.inputMode
  };
};

export default connect(mapStateToProps)(SnakesOverview);
