import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { parseDateRelativeMinuteSecond } from '@lib/utils';
import { gray, red } from '@styles/palette';
import { theme } from '@styles/theme';
import Card from '@components/common/Card';
import Divider from '@components/common/Divider';
import Typography from '@components/common/Typography';
import Flexbox from '@components/layouts/Flexbox';
import CurrentGameItem from '@components/current-game/CurrentGameItem';

const Container = styled.div`
  .current-game-type {
    font-weight: 600;
    padding-right: 0.5rem;
    border-right: 1px solid ${gray[300]};
  }

  .current-game-map {
    font-size: 0.75rem;
    padding-right: 0.5rem;
    border-right: 1px solid ${gray[300]};
  }

  .current-game-time {
    font-size: 0.75rem;
  }

  .team-container {
    flex-direction: column;
  }

  .blue-team {
    flex: 1;
    justify-content: start;
    flex-direction: column;
    width: 100%;
  }

  .red-team {
    flex: 1;
    justify-content: start;
    flex-direction: column;
    width: 100%;
  }

  .blue-team-text {
    padding: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${theme.primary};
  }

  .red-team-text {
    padding: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${red[500]};
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .team-container {
      flex-direction: row;
    }
  }
`;

interface Props {
  currentGameData: GetCurrentGameBySummonerNameResponseType;
}

const CurrentGameCard: React.FC<Props> = ({ currentGameData }) => {
  const [currentGameTime, setCurrentGameTime] = useState(
    new Date(currentGameData.gameStartTime),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGameTime(new Date(currentGameData.gameStartTime));
    }, 1000);

    return () => clearInterval(interval);
  }, [currentGameData.gameStartTime]);

  return (
    <Container>
      <Card>
        <Flexbox justify="start" padding="1rem" gap="0.5rem">
          <Typography className="current-game-type">솔랭</Typography>
          <Typography className="current-game-map">소환사의 협곡</Typography>
          <Typography className="current-game-time">
            {parseDateRelativeMinuteSecond(currentGameTime)}
          </Typography>
        </Flexbox>
        <Divider />
        <Flexbox className="team-container">
          <Flexbox className="blue-team">
            <Flexbox width="100%" justify="start">
              <Typography className="blue-team-text">블루팀</Typography>
            </Flexbox>
            <Divider />
            {currentGameData &&
              currentGameData.participants
                .slice(0, 5)
                .map((participant, index) => (
                  <CurrentGameItem
                    key={index}
                    participant={participant}
                    team="blue"
                  />
                ))}
          </Flexbox>
          <Flexbox className="red-team">
            <Flexbox width="100%" justify="start">
              <Typography className="red-team-text">레드팀</Typography>
            </Flexbox>
            <Divider />
            {currentGameData &&
              currentGameData.participants
                .slice(5, 10)
                .map((participant, index) => (
                  <CurrentGameItem
                    key={index}
                    participant={participant}
                    team="red"
                  />
                ))}
          </Flexbox>
        </Flexbox>
      </Card>
    </Container>
  );
};

export default CurrentGameCard;
