import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export interface IContainer extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size: 'sm' | 'md' | 'lg';
}

const containerVariants = {
  sm: {
    width: '600px',
    height: '200px',
  },
  md: {
    width: '800px',
    height: '400px',
  },
  lg: {
    width: '1000px',
    height: '600px',
  },
};

export type ContainerVariant = keyof typeof containerVariants;

const ContainerStyles = styled.div<{ size: ContainerVariant }>`
  width: ${({ size }) => containerVariants[size].width};
  height: ${({ size }) => containerVariants[size].height};
  border: 5px solid #6b01c2;
  border-radius: 30px;

  //colors and shit
  background-color: #fafafa;

  //content orientation
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;

export const Container = ({ children, size = 'sm', ...props }: IContainer) => {
  return (
    <ContainerStyles size={size} {...props}>
      <h1>{children}</h1>
    </ContainerStyles>
  );
};

export default Container;
