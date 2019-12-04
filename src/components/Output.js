import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  background-color: #eee;
`;

const Output = ({ snakes, foods }) => {
  return (
    <BackgroundDiv>
      <p>Snakes: {snakes.join(",")}</p>
      <p>Foods: {foods.join(",")}</p>
    </BackgroundDiv>
  );
};

const mapStateToProps = state => {
  let snakes = [],
    foods = [];

  state.grid.contents.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== "") {
        if (cell !== "f") snakes.push(`(${x},${y})`);
        else {
          foods.push(`(${x},${y})`);
        }
      }
    });
  });

  return { snakes, foods };
};

export default connect(mapStateToProps)(Output);
