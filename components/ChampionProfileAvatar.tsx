import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const Container = styled.div`
  position: relative;

  width: 80px;
  height: 80px;
  border-radius: 1rem;
  overflow: hidden;
`;

interface Props {
  championName: string;
}

const ChampionProfileAvatar: React.FC<Props> = ({ championName }) => {
  return (
    <Container>
      <Image
        width={80}
        height={80}
        src={`/champion-tile/${championName}.jpg`}
        alt="champion image"
        priority
      />
    </Container>
  );
};

export default ChampionProfileAvatar;
