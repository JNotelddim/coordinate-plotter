import React from "react";

const Cell = ({ x, y, value, onCellClick }) => {
  return <td onClick={() => onCellClick(x, y)}>{value}</td>;
};

export default Cell;
