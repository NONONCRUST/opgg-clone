import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

const Base = styled.main``;

const SummonerPage: React.FC = () => {
  const summonerName = useRouter().query.name;

  return <Base>{summonerName}</Base>;
};

export default SummonerPage;
