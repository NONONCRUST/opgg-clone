import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { capitalize, mapRank } from '@lib/utils';
import { gray } from '@lib/styles/palette';
import Avatar from '@components/common/Avatar';
import Typography from '@components/common/Typography';
import HighlightedText from '@components/HighlightedText';
import Flexbox from '@components/layouts/Flexbox';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  color: ${gray[500]};

  cursor: pointer;

  &:hover {
    background-color: ${gray[100]};
  }
`;

interface Props {
  summonerData: SummonerType;
  searchKeyword: string;
}

const MainInputAutoCompleteItem: React.FC<Props> = ({
  summonerData,
  searchKeyword,
}) => {
  return (
    <Link href={`/summoners/${summonerData.name}`} style={{ width: '100%' }}>
      <Container>
        <Avatar size="36px" src="/profile-icon/4644.png" />
        <Flexbox flex="col" items="start" gap="0.3rem">
          <HighlightedText string={summonerData.name} keyword={searchKeyword} />
          {summonerData.tier && (
            <Typography size="11px">
              {capitalize(summonerData.tier)}{' '}
              {mapRank(summonerData.rank as 'I' | 'II' | 'III' | 'IV')} -{' '}
              {summonerData.leaguePoints}
              LP
            </Typography>
          )}
          {!summonerData.tier && (
            <Typography size="11px">
              Level {summonerData.summonerLevel}
            </Typography>
          )}
        </Flexbox>
      </Container>
    </Link>
  );
};

export default MainInputAutoCompleteItem;
