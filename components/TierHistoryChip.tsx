import React from 'react';
import styled from '@emotion/styled';
import { gray } from '@lib/styles/palette';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.25rem;
  gap: 0.25rem;

  height: 1.125rem;
  background-color: ${gray[100]};
  color: ${gray[400]};
  font-size: 11px;
  border-radius: 0.125rem;

  .season {
    font-weight: 600;
  }
`;

interface Props {
  season: string;
  tier?: string;
  rank?: string;
}

const TierHistoryChip: React.FC<Props> = ({ season, tier, rank }) => {
  const capitalizedTier = `${tier?.charAt(0).toUpperCase()}${tier
    ?.slice(1)
    .toLowerCase()}`;

  return (
    <Container>
      <b className="season">S{season}</b>
      <span>
        {capitalizedTier} {rank}
      </span>
    </Container>
  );
};

export default TierHistoryChip;
