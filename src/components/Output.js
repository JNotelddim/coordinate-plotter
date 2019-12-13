import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import * as gridTypes from "../state/grid/grid.types";

const BackgroundDiv = styled.div`
  background-color: aliceblue;
  padding: 15px;
  margin-top: 10px;
  border-radius: 3px;
`;

const Output = ({ coordinateGroups }) => {
  const sectionIds = [...Object.keys(coordinateGroups)];
  const sections = sectionIds.map((sectionId, i) => (
    <p key={i}>
      <b>{coordinateGroups[sectionId].name}</b> :{" "}
      {coordinateGroups[sectionId].values.join(", ")}
    </p>
  ));
  return <BackgroundDiv>{sections}</BackgroundDiv>;
};

const mapStateToProps = state => {
  const coordinateGroups = {};
  state.snakes.forEach(
    snake => (coordinateGroups[snake.id] = { name: snake.name, values: [] })
  );
  coordinateGroups[gridTypes.FOOD_INPUT_MODE.id] = {
    name: gridTypes.FOOD_INPUT_MODE.name,
    values: []
  };

  state.grid.contents.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== gridTypes.CLEAR_INPUT_MODE.id) {
        coordinateGroups[cell].values.push(`(${x},${y})`);
      }
    });
  });

  return { coordinateGroups };
};

Output.propTypes = {
  coordinateGroups: PropTypes.shape({
    name: PropTypes.string,
    values: PropTypes.array
  })
};

export default connect(mapStateToProps)(Output);
