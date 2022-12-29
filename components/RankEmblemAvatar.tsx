import React from 'react';
import styled from '@emotion/styled';
import { gray } from '@lib/styles/palette';

interface ContainerProps {
  size?: string;
}

const Container = styled.img<ContainerProps>`
  background-color: ${gray[100]};
  border-radius: 50%;

  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

interface Props {
  tier?: string;
  size?: string;
}

const RankEmblemAvatar: React.FC<Props> = ({ tier, size = '4.5rem' }) => {
  return (
    <Container size={size} src={`/rank/${tier}.webp`} alt="summoner rank" />
  );
};

export default RankEmblemAvatar;
