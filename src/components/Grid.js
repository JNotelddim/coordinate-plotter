import React from "react";
import Cell from "./Cell";

class Grid extends React.Component {
  render() {
    let { height, width, contents } = this.props.gridConfig;
    let onCellClick = this.props.onCellClick;

    return (
      <div>
        Grid -- h: {height}, w: {width}{" "}
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
            {Array(height)
              .fill(0)
              .map((empty, y) => (
                <tr key={y}>
                  <td key="-1">{y}</td>
                  {Array(width)
                    .fill(width)
                    .map((empty, x) => (
                      <Cell
                        key={x}
                        x={x}
                        y={y}
                        value={contents[y][x]}
                        onCellClick={onCellClick}
                      />
                    ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
