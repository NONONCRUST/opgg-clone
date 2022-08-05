import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../styles/theme";

const getNavigationBarItemActive = (active?: boolean) => {
  if (active) {
    return css`
      color: white;
      border-bottom: 4px solid white;
    `;
  }
};

interface ContainerProps {
  active?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  color: ${theme.text.tertiary};
  height: 100%;

  cursor: pointer;

  &:hover {
    color: white;
    border-bottom: 4px solid white;
  }

  ${({ active }) => getNavigationBarItemActive(active)}
`;

interface Props {
  name: string;
  active?: boolean;
}

const NavigationBarItem: React.FC<Props> = ({ name, active }) => {
  return <Container active={active}>{name}</Container>;
};

export default NavigationBarItem;
