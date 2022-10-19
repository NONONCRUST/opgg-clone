import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ContainerProps {
  size?: string;
  color?: string;
  weight?: number;
  underline?: boolean;
}

const Container = styled.p<ContainerProps>`
  text-decoration: ${({ underline }) => underline && 'underline'};

  ${({ theme }) =>
    theme.mode === 'dark' &&
    css`
      color: white;
    `}
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
`;

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: string;
  color?: string;
  weight?: number;
  underline?: boolean;
}

const Typography: React.FC<Props> = ({
  children,
  size,
  color,
  weight,
  underline,
  ...props
}) => {
  return (
    <Container
      size={size}
      color={color}
      underline={underline}
      weight={weight}
      {...props}
    >
      {children}
    </Container>
  );
};

export default React.memo(Typography);
