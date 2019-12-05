import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  background: ${props => (props.selected ? "#00f" : "#eee")};
  color: ${props => (props.selected ? "white" : "black")}
  text-align: center;
  padding: 0.8em 1.5em;
  margin: 1em 2em;
  cursor: pointer;

  &:hover {
    background: #aaa;
  }
`;

const Button = ({ children, onClick, selected }) => {
  return (
    <StyledButton onClick={onClick} selected={selected}>
      {children}
    </StyledButton>
  );
};

export default Button;
