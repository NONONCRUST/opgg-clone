import React from 'react';
import styled from '@emotion/styled';
import { purple, red, yellow } from '@lib/styles/palette';

type MatchResultChipVariant =
  | 'double'
  | 'triple'
  | 'quadra'
  | 'penta'
  | 'mvp'
  | 'ace';

const matchResultChipText = {
  double: '더블킬',
  triple: '트리플킬',
  quadra: '쿼드라킬',
  penta: '펜타킬',
  mvp: 'MVP',
  ace: 'ACE',
};

const matchResultChipBackgroundColorStyle = {
  mvp: yellow[500],
  ace: purple[600],
  double: red[500],
  triple: red[500],
  quadra: red[500],
  penta: red[500],
};
interface ContainerProps {
  variant: MatchResultChipVariant;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.3rem;

  padding: 0.5rem;

  height: 18px;
  font-size: 0.75rem;
  color: white;
  border-radius: 2rem;

  background-color: ${({ variant }) =>
    matchResultChipBackgroundColorStyle[variant]};
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: MatchResultChipVariant;
}

const MatchResultChip: React.FC<Props> = ({ variant = 'double', ...props }) => {
  return (
    <Container variant={variant} {...props}>
      {matchResultChipText[variant]}
    </Container>
  );
};

export default MatchResultChip;
