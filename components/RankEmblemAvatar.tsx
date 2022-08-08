import styled from "@emotion/styled";
import React from "react";
import palette from "../styles/palette";

interface ContainerProps {
  size?: string;
}

const Container = styled.img<ContainerProps>`
  background-color: ${palette.gray[100]};
  border-radius: 50%;

  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

interface Props {
  rank?:
    | "iron"
    | "bronze"
    | "silver"
    | "gold"
    | "platinum"
    | "diamond"
    | "master"
    | "grandmaster"
    | "challenger";
  size?: string;
}

const RankEmblemAvatar: React.FC<Props> = ({ rank, size = "4.5rem" }) => {
  return (
    <Container size={size} src={`/rank/${rank}.webp`} alt="summoner rank" />
  );
};

export default RankEmblemAvatar;
