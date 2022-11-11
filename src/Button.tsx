import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'purple' | 'yellow' | 'blue';
  disabled: boolean;
}

const buttonVariants = {
  purple: {
    bgColor: '#795fee',
    hoverColor: '#5b44c2',
    textColor: '#F8FBF8',
  },
  yellow: {
    bgColor: '#fafa6a',
    hoverColor: '#FFFF33',
    textColor: '#1B1B1B',
  },
  blue: {
    bgColor: '#007FFF',
    hoverColor: '#056ed8',
    textColor: '#F8FBF8',
  },
};

export type ButtonVariant = keyof typeof buttonVariants;

const ButtonStyles = styled.button<{ variant: ButtonVariant }>`
  //spacing and shape
  border: 0 solid #e5e7eb;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;

  //color and font
  background-color: ${({ variant }) => buttonVariants[variant].bgColor};
  color: ${({ variant }) => buttonVariants[variant].textColor};
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;

  //animation
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  outline: 0;

  &:hover {
    background-color: ${({ variant }) => buttonVariants[variant].hoverColor};
  }

  &:after {
    content: '';
    position: absolute;
    border: 2px solid #311432;
    border-radius: 10px;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 1.5px;
    left: 1.5px;
  }

  @media (min-width: 768px) {
    & {
      padding: 0.75rem 3rem;
      font-size: 1.25rem;
    }
  }

  //others
  &:disabled {
    background-color: #ebebeb;
    color: #646464;
    cursor: default;
  }

  &:disabled:hover:after {
    bottom: 4px;
    left: 4px;
  }
`;

export const Button = ({ children, variant = 'purple', ...props }: Props) => {
  return (
    <ButtonStyles variant={variant} {...props}>
      {children}
    </ButtonStyles>
  );
};
