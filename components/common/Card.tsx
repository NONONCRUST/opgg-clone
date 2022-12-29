import React from 'react';
import styled from '@emotion/styled';

interface ContainerProps {
  width?: string;
  height?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 0.25rem;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}

const Card: React.FC<Props> = ({
  children,
  width = '100%',
  height,
  ...props
}) => {
  return (
    <Container width={width} height={height} {...props}>
      {children}
    </Container>
  );
};

export default React.memo(Card);
