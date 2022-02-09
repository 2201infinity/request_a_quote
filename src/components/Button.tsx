import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonStyledProps {
  variant: 'primary' | 'secondary';
  width?: string;
  height?: string;
}

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonStyledProps {
  children: React.ReactNode;
}

export const Button = ({
  variant,
  width,
  height = '32px',
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled variant={variant} width={width} height={height} {...rest}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSize.text}px;
  box-sizing: border-box;
  transition: 0.15s ease-in-out;
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background-color: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
          border: none;
          &:hover {
            background-color: #0b5ed7;
          }
        `;
      case 'secondary':
        return css`
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.primary};
          border: 1px solid ${({ theme }) => theme.colors.primary};
          &:hover {
            background-color: ${({ theme }) => theme.colors.primary};
            color: ${({ theme }) => theme.colors.white};
          }
        `;
    }
  }};
  &:first-of-type {
    margin-right: 8px;
  }
`;
