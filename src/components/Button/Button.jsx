import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem;
  outline: none;
  border-radius: 5%;
  background: papayawhip;
  font-size: 1rem;
  color: ${({ disabled }) => (disabled ? "gray" : "violet")};
`;

const Button = ({ children, ...others }) => {
  return <StyledButton {...others}>{children}</StyledButton>;
};

export default Button;
