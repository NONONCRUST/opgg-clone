import React, { useState } from 'react';
import styled from '@emotion/styled';
import MatchResultCard from '@components/match-result/MatchResultCard';
import MatchResultGame from '@components/match-result/MatchResultGame';
import MatchResultInfo from '@components/match-result/MatchResultInfo';
import MatchResultParticipants from '@components/match-result/MatchResultParticipants';
import MatchResultAction from '@components/match-result/MatchResultAction';
import Flexbox from '@components/layouts/Flexbox';
import MatchResultDetail from '@components/match-result/MatchResultDetail';
import { blue, red } from '@lib/styles/palette';

interface ContainerProps {
  result: 'win' | 'lose';
}

const Container = styled.div<ContainerProps>`
  width: 100%;

  .indicator {
    height: 6rem;
    width: 0.4rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    background-color: ${({ result }) =>
      result === 'win' ? blue[500] : red[500]};
  }
`;

interface Props {
  matchData: MatchType;
  summonerName: string;
}

const MatchResult: React.FC<Props> = ({ matchData, summonerName }) => {
  const [matchDetailOpen, setMatchDetailOpen] = useState(false);

  const me = matchData.participants.find(
    (participant) => participant.summonerName === summonerName,
  );

  const result = me?.win ? 'win' : 'lose';

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
