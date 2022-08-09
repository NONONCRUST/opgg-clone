import { css } from "@emotion/react";
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

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: ${palette.gray[800]};
    `}
`;

interface Props {
  tier?: string;
  size?: string;
}

const RankEmblemAvatar: React.FC<Props> = ({ tier, size = "4.5rem" }) => {
  return (
    <Container size={size} src={`/rank/${tier}.webp`} alt="summoner rank" />
  );
};

export default RankEmblemAvatar;
