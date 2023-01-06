import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@lib/styles/theme';
import { gray } from '@lib/styles/palette';
import Link from 'next/link';

const navigationBarItemActiveStyle = css`
  color: white;
  border-bottom: 3px solid white;
`;

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

  ${({ active }) => active && navigationBarItemActiveStyle}
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
      <Link href={href}>{name}</Link>
    </Container>
  );
};

export default NavigationBarItem;
