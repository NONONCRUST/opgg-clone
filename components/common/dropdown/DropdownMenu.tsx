import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../../styles/theme";

interface ContainerProps {
  width?: string;
}

const Container = styled.ul<ContainerProps>`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: -1px;
  box-shadow: ${theme.elevation4};

  border-radius: 0.25rem;
  width: ${({ width }) => width};
  width: calc(100% + 2px);

  overflow: hidden;

  z-index: 3;
`;

interface Props {
  children: React.ReactNode;
  width?: string;
}

const DropdownMenu: React.FC<Props> = ({ children, width }) => {
  return <Container width={width}>{children}</Container>;
};

export default DropdownMenu;
