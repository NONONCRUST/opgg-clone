import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@lib/styles/theme';
import Card from '@components/common/Card';
import Divider from '@components/common/Divider';
import Typography from '@components/common/Typography';
import Flexbox from '@components/layouts/Flexbox';
import MatchResultDetailItem from '@components/match-result/MatchResultDetailItem';
import { gray, red } from '@lib/styles/palette';

const Container = styled.div`
  margin-top: 0.2rem;

  .match-result-meta {
    padding: 0.5rem 1rem;
    justify-content: flex-start;
    color: ${gray[400]};
    font-size: 0.75rem;
  }

  .team-meta {
  }

  .kda-meta {
    margin-left: 9.5rem;
  }

  .damage-dealt-meta {
    margin-left: 3.5rem;
  }

  .ward-meta {
    display: none;
    margin-left: 2rem;
  }

  .cs-meta {
    display: none;
    margin-left: 3rem;
  }

  .item-meta {
    display: none;
    margin-left: 7rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .ward-meta {
      display: flex;
    }

    .cs-meta {
      display: flex;
    }

    .item-meta {
      display: flex;
    }
  }
`;

interface Props {
  matchData: MatchType;
  team: 'blue' | 'red';
}

const MatchResultDetail: React.FC<Props> = ({ matchData, team }) => {
  const winnerTeam = matchData.participants[0].win ? 'blue' : 'red';

  const isVictory = team === winnerTeam;

  return (
    <Container>
      <Card>
        <Flexbox className="match-result-meta">
          <Typography color={isVictory ? theme.primary : red[500]}>
            {isVictory ? '승리' : '패배'}
          </Typography>
          <span className="team-meta">(블루팀)</span>
          <p className="kda-meta">KDA</p>
          <p className="damage-dealt-meta">피해량</p>
          <p className="ward-meta">와드</p>
          <p className="cs-meta">CS</p>
          <p className="item-meta">아이템</p>
        </Flexbox>
        <Divider />
        {team === 'blue' &&
          matchData.participants
            .slice(0, 5)
            .map((participant, index) => (
              <MatchResultDetailItem
                matchData={matchData}
                participant={participant}
                key={index}
              />
            ))}
        {team === 'red' &&
          matchData.participants
            .slice(5, 10)
            .map((participant, index) => (
              <MatchResultDetailItem
                matchData={matchData}
                participant={participant}
                key={index}
              />
            ))}
      </Card>
    </Container>
  );
};

export default MatchResultDetail;
