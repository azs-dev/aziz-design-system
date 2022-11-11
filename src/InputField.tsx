import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface IInputField extends HTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

const StyledInput = styled.input`
  //shape
  width: ${({ width }) => width || '300px'};
  height: ${({ height }) => height || '50px'};
  border-radius: 15px;
  border: 3px solid black;
  outline: 0px;
  padding: 0 15px;
  transition: 0.2 all;

  //animation n shit
  &:focus {
    border-color: red;
    transition: 0.2 all;
  }
`;

const InputField = () => {
  return <StyledInput />;
};

export default InputField;
