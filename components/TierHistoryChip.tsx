import styled from "@emotion/styled";
import React from "react";
import palette from "../styles/palette";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.25rem;
  gap: 0.25rem;

  height: 1.125rem;
  background-color: ${palette.gray[100]};
  color: ${palette.gray[400]};
  font-size: 11px;
  border-radius: 0.125rem;

  .season {
    font-weight: 600;
  }
`;

interface Props {
  season: string;
  tier: TierType;
}

const TierHistoryChip: React.FC<Props> = ({ season, tier }) => {
  const capitalizedTier = `${tier.charAt(0).toUpperCase()}${tier.slice(1)}`;

  return (
    <Container>
      <b className="season">S{season}</b>
      <span>{capitalizedTier}</span>
    </Container>
  );
};

export default TierHistoryChip;
