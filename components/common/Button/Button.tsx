import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../../styles/theme";

const getButtonVariant = (variant?: "text" | "contained" | "outlined") => {
  switch (variant) {
    case "text":
      return css`
        background: none;
        color: ${theme.primary};

        &:hover {
          background-color: white;
        }
      `;
    case "contained":
      return css`
        background-color: ${theme.primary};
        color: white;

        &:hover {
          background-color: ${theme.primaryVariant};
        }
      `;
    case "outlined":
      return css`
        background-color: white;
        border: 1px solid ${theme.primary};
        color: ${theme.primary};

        &:hover {
          background-color: ${theme.primaryLight};
        }
      `;
  }
};

const getButtonDisabled = (disabled?: boolean) => {
  switch (disabled) {
    case true:
      return css`
        opacity: 0.38;
        pointer-events: none;
      `;
  }
};

const getButtonSize = (size?: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return css`
        height: 2rem;
        padding: 0.5rem 1.2rem;
        font-size: 0.75rem;
      `;
    case "medium":
      return css`
        height: 2.5rem;
        padding: 0.625rem 1.5rem;
        font-size: 0.875rem;
      `;
    case "large":
      return css`
        height: 3rem;
        padding: 0.75rem 1.8rem;
        font-size: 1rem;
      `;
  }
};

interface ContainerProps {
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  width?: string;
  height?: string;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  min-width: 4rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: none;

  cursor: pointer;

  &:hover {
    background-color: ${theme.primaryVariant};
  }

  ${({ startIcon }) =>
    startIcon &&
    css`
      padding-left: 1rem;
    `};

  ${({ endIcon }) =>
    endIcon &&
    css`
      padding-right: 1rem;
    `};

  ${({ variant }) => getButtonVariant(variant)};

  ${({ size }) => getButtonSize(size)};

  ${({ disabled }) => getButtonDisabled(disabled)};

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "medium" | "large";
  width?: string;
  height?: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  label = "버튼",
  variant = "contained",
  size = "medium",
  disabled,
  startIcon,
  endIcon,
  width,
  height,
  ...props
}) => {
  return (
    <Container
      variant={variant}
      disabled={disabled}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      width={width}
      height={height}
      {...props}
    >
      {startIcon && startIcon}
      {label}
      {endIcon && endIcon}
    </Container>
  );
};

export default Button;
