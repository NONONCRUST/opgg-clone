import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { gray } from '@lib/styles/palette';
import Link from 'next/link';

const Container = styled.div`
  position: relative;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  cursor: pointer;

  .image {
    border-radius: 50%;
  }

  .level {
    position: absolute;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 11px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${gray[800]};
    color: white;
  }
`;

interface Props {
  champion: string;
  level: number;
}

const MatchResultChampionAvatar: React.FC<Props> = ({ champion, level }) => {
  return (
    <Link href={`/champions/${champion}`}>
      <a>
        <Container>
          <Image
            className="image"
            src={`/champion/${champion}.png`}
            alt={champion}
            width="48px"
            height="48px"
          />
          <div className="level">{level}</div>
        </Container>
      </a>
    </Link>
  );
};

export default MatchResultChampionAvatar;
