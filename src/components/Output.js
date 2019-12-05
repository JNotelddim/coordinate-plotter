import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import * as gridTypes from "../state/grid/grid.types";

const BackgroundDiv = styled.div`
  background-color: #eee;
`;

const Output = ({ coordinateGroups }) => {
  let sectionNames = [...Object.keys(coordinateGroups)];
  let sections = sectionNames.map((sectionName, i) => (
    <p key={i}>
      {sectionName} : {coordinateGroups[sectionName]}
    </p>
  ));
  return <BackgroundDiv>{sections}</BackgroundDiv>;
};

const mapStateToProps = state => {
  let coordinateGroups = {};
  state.snakes.forEach(snake => (coordinateGroups[snake.name] = []));
  coordinateGroups[gridTypes.FOOD_INPUT_MODE.name] = [];

  let idToNameMap = {
    [gridTypes.FOOD_INPUT_MODE.id]: gridTypes.FOOD_INPUT_MODE.name,
    [gridTypes.CLEAR_INPUT_MODE.id]: gridTypes.CLEAR_INPUT_MODE.name
  };
  state.snakes.forEach(snake => (idToNameMap[snake.id] = snake.name));

  state.grid.contents.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== gridTypes.CLEAR_INPUT_MODE.id) {
        let name = idToNameMap[cell];
        coordinateGroups[name].push(`(${x},${y})`);
      }
    });
  });

  return { coordinateGroups };
};

export default connect(mapStateToProps)(Output);
