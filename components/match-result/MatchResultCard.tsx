import React from 'react';
import styled from '@emotion/styled';
import { blue, red } from '@lib/styles/palette';

interface ContainerProps {
  result: 'win' | 'lose';
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;

  border-radius: 0.25rem;
  background-color: ${({ result }) => (result === 'win' ? blue[50] : red[50])};
`;

interface Props {
  children: React.ReactNode;
  result: 'win' | 'lose';
}

const MatchResultCard: React.FC<Props> = ({ children, result }) => {
  return <Container result={result}>{children}</Container>;
};

export default MatchResultCard;
