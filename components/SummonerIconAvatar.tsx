import styled from "@emotion/styled";
import React from "react";

const Container = styled.div``;

interface Props {
  src?: string;
}

const SummonerIconAvatar: React.FC<Props> = ({ src }) => {
  return (
    <Container>
      <img src={src} alt="summoner icon" />
    </Container>
  );
};

export default SummonerIconAvatar;
