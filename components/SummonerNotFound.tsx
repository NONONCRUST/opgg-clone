import React from "react";
import styled from "@emotion/styled";
import { gray } from "../styles/palette";
import Typography from "./common/Typography";

const Base = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  align-items: center;
  min-height: 100vh;

  background-color: ${gray[100]};

  .summoner-not-found-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 6rem;
  }

  .summoner-not-found-description {
    font-size: 1rem;
    font-weight: 500;
    color: ${gray[500]};
  }
`;

const SummonerNotFound: React.FC = () => {
  return (
    <Base>
      <Typography className="summoner-not-found-title">
        OP.GG에 등록되지 않은 소환사입니다.
      </Typography>
      <Typography className="summoner-not-found-description">
        오타가 있는지 확인 후 다시 검색해주세요.
      </Typography>
    </Base>
  );
};

export default SummonerNotFound;
