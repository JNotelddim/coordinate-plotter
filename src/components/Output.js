import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  background-color: #eee;
`;

const Output = ({ coordinateGroups }) => {
  let sectionNames = [...Object.keys(coordinateGroups)];
  let sections = sectionNames.map(sectionName => (
    <p>
      {sectionName} : {coordinateGroups[sectionName]}
    </p>
  ));
  return <BackgroundDiv>{sections}</BackgroundDiv>;
};

const mapStateToProps = state => {
  let coordinateGroups = {};
  state.snakes.forEach(snakeName => (coordinateGroups[snakeName] = []));
  coordinateGroups["Food"] = [];

  state.grid.contents.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== "") {
        coordinateGroups[cell].push(`(${x},${y})`);
      }
    });
  });

  return { coordinateGroups };
};

export default connect(mapStateToProps)(Output);
