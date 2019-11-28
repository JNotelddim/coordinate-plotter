import React from "react";

const Output = ({ gridContents }) => {
  let snakes = [];
  let foods = [];
  gridContents.forEach((row, y) => {
    row.forEach((cell, x) => {
      if (cell !== "") {
        if (cell !== "f") snakes.push(`(${x},${y})`);
        else {
          foods.push(`(${x},${y})`);
        }
      }
    });
  });

  return (
    <div>
      <p>Snakes: {snakes.join(",")}</p>
      <p>Foods: {foods.join(",")}</p>
    </div>
  );
};

export default Output;
