import React from "react";

class Grid extends React.Component {
  render() {
    let { height, width, contents } = this.props.gridConfig;

    return (
      <div>
        Grid -- h: {height}, w: {width}{" "}
        <table>
          <thead>
            <tr>
              <th></th>
              {Array(width)
                .fill(0)
                .map((empty, x) => (
                  <th>{x}</th>
                ))}
            </tr>
          </thead>

          <tbody>
            {Array(height)
              .fill(0)
              .map((empty, y) => (
                <tr>
                  <td>{y}</td>
                  <td>
                    {Array(width)
                      .fill(width)
                      .map((empty, x) => (
                        <td></td>
                      ))}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
