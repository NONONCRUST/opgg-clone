import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";

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
  color: ${palette.gray[300]};
  height: 100%;
  border-bottom: 3px solid ${theme.primary};

  cursor: pointer;

  &:hover {
    color: white;
    border-bottom: 3px solid white;
  }

  ${({ active }) => getNavigationBarItemActive(active)}
`;

interface Props {
  name: string;
  active?: boolean;
}

const NavigationBarItem: React.FC<Props> = ({ name, active }) => {
  return (
    <Container active={active}>
      <Link href="/">
        <a>{name}</a>
      </Link>
    </Container>
  );
};

export default NavigationBarItem;
