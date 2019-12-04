import React from "react";
import { connect } from "react-redux";

const Snakes = () => {
  return <div>Snakes</div>;
};

const mapStateToProps = state => {
  return { snakes: state.snakes };
};

export default connect(mapStateToProps)(Snakes);
