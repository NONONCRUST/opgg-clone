import React from "react";
import styled from "@emotion/styled";
import palette from "../../styles/palette";

const Container = styled.div`
  position: relative;

  width: 3rem;
  height: 3rem;
  border-radius: 50%;

  .image {
    width: 100%;
    height: 100%;
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
    background-color: ${palette.gray[800]};
    color: white;
  }
`;

interface Props {
  champion: string;
  level: number;
}

const MatchResultChampionAvatar: React.FC<Props> = ({ champion, level }) => {
  return (
    <Container>
      <img className="image" src={`/champion/${champion}.png`} alt={champion} />
      <div className="level">{level}</div>
    </Container>
  );
};

export default MatchResultChampionAvatar;
