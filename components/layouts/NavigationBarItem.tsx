import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { gray } from "../../styles/palette";

const getNavigationBarItemActive = (active?: boolean) => {
  if (active) {
    return css`
      color: white;
      border-bottom: 3px solid white;
    `;
  }
};

interface ContainerProps {
  active?: boolean;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  color: ${gray[300]};
  height: 100%;
  border-bottom: 3px solid ${theme.primary};

  cursor: pointer;

  &:hover {
    color: white;
    border-bottom: 3px solid white;
  }

  ${({ active }) => getNavigationBarItemActive(active)}
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  active?: boolean;
}

const NavigationBarItem: React.FC<Props> = ({ name, active, ...props }) => {
  return (
    <Container active={active} {...props}>
      {name}
    </Container>
  );
};

export default NavigationBarItem;
