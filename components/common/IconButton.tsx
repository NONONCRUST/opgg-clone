import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../styles/theme";

type IconButtonVariantType = "contained" | "outlined";

interface ContainerProps {
  variant?: IconButtonVariantType;
}

const getIconButtonVariant = (variant?: IconButtonVariantType) => {
  switch (variant) {
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

const Container = styled.button<ContainerProps>`
  padding: 0.5rem;

  ${({ variant }) => getIconButtonVariant(variant)};
`;

interface Props {
  children: React.ReactNode;
  variant?: "contained" | "outlined";
}

const IconButton: React.FC<Props> = ({ children, variant }) => {
  return <Container variant={variant}>{children}</Container>;
};

export default IconButton;
