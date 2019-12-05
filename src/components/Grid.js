import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Cell from "./Cell";
import InputModeSelector from "./InputModeSelector";

let Wrapper = styled.div`
  border: 1px solid grey;
  padding: 15px;
`;

let StyledGrid = styled.div`
  display: grid;
  height: 600px;
  grid-template-columns: repeat(15, auto);
  grid-template-rows: repeat(15, auto);
`;

const Grid = ({ grid }) => {
  let { height, width, contents } = grid;

  return (
    <Wrapper>
      Grid -- h: {height}, w: {width}
      <StyledGrid>
        {contents.map((row, y) =>
          row.map((cell, x) => <Cell key={x} x={x} y={y} value={cell}></Cell>)
        )}
      </StyledGrid>
      {/*
      
      <table className="ui celled padded table" style={{ display: "none" }}>
        {/* HEADERS /}
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

        {/* TABLE BODY /}
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
      */}
      <InputModeSelector />
    </Wrapper>
  );
};

const mapStateToProps = state => {
  return { grid: state.grid };
};

export default connect(mapStateToProps)(Grid);
