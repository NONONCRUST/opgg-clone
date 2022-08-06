import styled from "@emotion/styled";
import React from "react";
import palette from "../../../styles/palette";

interface ContainerProps {
  width?: string;
}

const Container = styled.ul<ContainerProps>`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: -1px;
  border: 1px solid ${palette.gray[300]};
  border-radius: 0.25rem;
  width: ${({ width }) => width};
  width: calc(100% + 2px);
`;

interface Props {
  children: React.ReactNode;
  width?: string;
}

const DropdownMenu: React.FC<Props> = ({ children, width }) => {
  return <Container width={width}>{children}</Container>;
};

export default DropdownMenu;
