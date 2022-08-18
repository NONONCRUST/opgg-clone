import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { gray } from "../../styles/palette";
import Link from "next/link";

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

const Container = styled.li<ContainerProps>`
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

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  name: string;
  href: string;
  active?: boolean;
}

const NavigationBarItem: React.FC<Props> = ({
  name,
  href,
  active,
  ...props
}) => {
  return (
    <Container active={active} {...props}>
      <Link href={href}>
        <a>{name}</a>
      </Link>
    </Container>
  );
};

export default NavigationBarItem;
