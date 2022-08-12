import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 6.25rem;
  height: 6.25rem;
  border-radius: 1.25rem;

  .image {
    border-radius: 20px;
  }

  .level {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: -0.5rem;

    font-size: 0.75rem;
    width: 2rem;
    height: 1.25rem;
    background-color: black;
    color: white;
    border-radius: 0.625rem;
  }
`;

interface Props {
  iconNumber: number;
  level?: number;
}

const SummonerIconAvatar: React.FC<Props> = ({ iconNumber, level }) => {
  return (
    <Container>
      <Image
        width="100px"
        height="100px"
        className="image"
        src={`/profile-icon/${iconNumber}.png`}
        alt="summoner icon"
        priority
      />
      <div className="level">{level}</div>
    </Container>
  );
};

export default SummonerIconAvatar;
