import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from '@store/index';
import ChampionSearchInput from '@components/champion-search/ChampionSearchInput';
import Avatar from '@components/common/Avatar';
import Card from '@components/common/Card';
import Divider from '@components/common/Divider';
import TabButton from '@components/common/TabButton';
import Typography from '@components/common/Typography';
import DonutChart from '@components/DonutChart';
import Flexbox from '@components/layouts/Flexbox';
import { gray } from '@styles/palette';

const Container = styled.div`
  .match-summary-tab-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.875rem;
    padding: 0 0.5rem;
  }
`;

interface Props {
  matchListData: MatchType[];
  summonerName: string;
}

const MatchSummaryCard: React.FC<Props> = ({ matchListData, summonerName }) => {
  const championSearchFilter = useSelector(
    (state) => state.search.championSearchFilter,
  );

  const gameWon = matchListData.filter((matchList) => {
    const me = matchList.participants.find(
      (participant) => participant.summonerName === summonerName,
    );
    return me?.win === true;
  });

  const gameCount = matchListData?.length ?? 1;

  const winrate = (gameWon.length / gameCount) * 100;

  return (
    <Container>
      <Card>
        <div className="match-summary-tab-area">
          <Flexbox gap="0.2rem" role="tablist">
            <TabButton width="4.5rem" height="1.75rem" active>
              솔로랭크
            </TabButton>
          </Flexbox>
          <Flexbox gap="0.5rem">
            {championSearchFilter && (
              <Avatar
                size="24px"
                src={`/champion/${championSearchFilter}.png`}
              />
            )}
            <ChampionSearchInput />
          </Flexbox>
        </div>
        <Divider />
        <Flexbox justify="start" padding="1rem">
          <Flexbox flex="col" gap="0.5rem">
            <Typography color={gray[500]} size="0.75rem">
              {gameCount}전{gameWon.length}승{gameCount - gameWon.length}패
            </Typography>
            <DonutChart percentage={winrate} />
          </Flexbox>
        </Flexbox>
      </Card>
    </Container>
  );
};

export default MatchSummaryCard;
