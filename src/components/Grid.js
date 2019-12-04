import React from "react";
import { connect } from "react-redux";
import Cell from "./Cell";
import InputModeSelector from "./InputModeSelector";

const Grid = ({ grid }) => {
  let { height, width, contents } = grid;

  return (
    <div>
      Grid -- h: {height}, w: {width}
      <table className="ui celled padded table">
        {/* HEADERS */}
        <thead>
          <tr>
            <th key={-1}></th>
            {Array(width)
              .fill(0)
              .map((empty, x) => (
                <th key={x}>{x}</th>
              ))}
          </tr>
        </thead>

        {/* TABLE BODY */}
        <tbody>
          {contents.map((row, y) => (
            <tr key={y}>
              <td key="-1">{y}</td>
              {row.map((cellValue, x) => (
                <Cell key={x} x={x} y={y} value={cellValue} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <InputModeSelector />
    </div>
  );
};

const mapStateToProps = state => {
  return { grid: state.grid };
};

export default connect(mapStateToProps)(Grid);
