import React from 'react';
import styled from '@emotion/styled';
import Typography from '@components/common/Typography';
import Divider from '@components/common/Divider';
import { getMatchTypeByQueueId, parseDateRelative } from '@lib/utils';
import { blue, gray, red } from '@lib/styles/palette';

interface ContainerProps {
  result: 'win' | 'lose';
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  width: 6.5rem;
  height: 6rem;
  padding: 0.8rem 1rem;

  .solo-rank-text {
    font-size: 0.75rem;
    color: ${({ result }) => (result === 'win' ? blue[500] : red[500])};
    font-weight: bold;
  }

  .result-text {
    font-size: 0.75rem;
    color: ${gray[500]};
    font-weight: bold;
  }

  .divider {
    margin-top: 0.5rem;
    border: 0.5px solid
      ${({ result }) => (result === 'win' ? blue[100] : red[100])};
  }
`;

interface Props {
  matchData: MatchType;
  result: 'win' | 'lose';
}

const MatchResultGame: React.FC<Props> = ({ matchData, result }) => {
  return (
    <Container result={result}>
      <Typography className="solo-rank-text">
        {getMatchTypeByQueueId(matchData.queueId)}
      </Typography>
      <Typography size="12px" color={gray[400]}>
        {parseDateRelative(new Date(matchData.gameEndTimestamp))}
      </Typography>
      <Divider className="divider" />
      <Typography className="result-text">
        {result === 'win' ? '승리' : '패배'}
      </Typography>
      <Typography size="12px" color={gray[400]}>
        {Math.floor(matchData.gameDuration / 60)}분{' '}
        {matchData.gameDuration % 60}초
      </Typography>
    </Container>
  );
};

export default MatchResultGame;
