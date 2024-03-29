import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  background: ${props => (props.selected ? "#00f" : "#eee")};
  color: ${props => (props.selected ? "white" : "black")};
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

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  onClick: PropTypes.func,
  selected: PropTypes.bool
};

export default Button;
