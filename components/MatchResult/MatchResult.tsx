import React, { useState } from "react";
import styled from "@emotion/styled";
import MatchResultCard from "./MatchResultCard";
import MatchResultGame from "./MatchResultGame";
import MatchResultInfo from "./MatchResultInfo";
import MatchResultParticipants from "./MatchResultParticipants";
import MatchResultAction from "./MatchResultAction";
import Flexbox from "../layouts/Flexbox";
import palette from "../../styles/palette";
import Card from "../common/Card";
import MatchResultDetail from "./MatchResultDetail";

interface ContainerProps {
  result: "win" | "lose";
}

const Container = styled.div<ContainerProps>`
  width: 100%;

  .indicator {
    height: 6rem;
    width: 0.5rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    background-color: ${({ result }) =>
      result === "win" ? palette.blue[500] : palette.red[500]};
  }
`;

interface Props {
  matchData: MatchType;
  summonerName: string;
}

const MatchResult: React.FC<Props> = ({ matchData, summonerName }) => {
  const [matchDetailOpen, setMatchDetailOpen] = useState(false);

  console.log(matchData);

  const me = matchData.participants.find(
    (participant) => participant.summonerName === summonerName
  );
  const result = me?.win ? "win" : "lose";

  return (
    <Container result={result}>
      {me && (
        <MatchResultCard result={result}>
          <Flexbox>
            <div className="indicator" />
            <MatchResultGame matchData={matchData} result={result} />
            <MatchResultInfo
              matchData={matchData}
              result={result}
              summonerName={summonerName}
            />
            <MatchResultParticipants matchData={matchData} />
          </Flexbox>
          <MatchResultAction
            result={result}
            matchDetailOpen={matchDetailOpen}
            setMatchDetailOpen={setMatchDetailOpen}
          />
        </MatchResultCard>
      )}
      {matchDetailOpen && (
        <>
          <MatchResultDetail team="blue" matchData={matchData} />
          <MatchResultDetail team="red" matchData={matchData} />
        </>
      )}
    </Container>
  );
};

export default MatchResult;
