import styled from "@emotion/styled";
import React from "react";
import {
  getCsPerMinute,
  getKda,
  getKillParticipation,
  shortenText,
} from "../../lib/utils";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import Avatar from "../common/Avatar";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";

const getKdaColor = (kda: string | number) => {
  if (kda === "Perfect") return palette.yellow[500];
  if (kda < 3) return palette.gray[500];
  if (kda > 3 && kda < 4) return palette.teal[500];
  if (kda > 4 && kda < 5) return theme.primary;
  if (kda > 5) return palette.yellow[500];
};

interface ContainerProps {
  win: boolean;
  damageProportion: number;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.1rem;
  color: ${palette.gray[500]};

  background-color: ${({ win }) => (win ? palette.blue[50] : palette.red[50])};

  .match-detail-summoner-name {
    margin-left: 0.5rem;
    width: 6rem;
    color: ${palette.gray[900]};
    font-size: 0.875rem;
  }

  .match-detail-kda {
    width: 6rem;
  }

  .match-detail-damage-dealt {
    width: 4rem;
  }

  .match-detail-ward {
    display: none;
    width: 3rem;
  }

  .match-detail-cs {
    display: none;
    width: 5rem;
  }

  .match-detail-items {
    display: none;
    margin-left: 1rem;
  }

  .match-detail-item {
    background-color: ${({ win }) =>
      win ? palette.blue[200] : palette.red[200]};
  }

  .dealt-damage-bar {
    width: 3.2rem;
    height: 0.4rem;
    background-color: white;
  }

  .dealt-damage-progression {
    width: ${({ damageProportion }) => damageProportion}%;
    height: 0.4rem;
    background-color: ${palette.red[500]};
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .match-detail-ward {
      display: flex;
    }

    .match-detail-cs {
      display: flex;
    }

    .match-detail-items {
      display: flex;
    }
  }
`;

interface Props {
  participant: ParticipantType;
  matchData: MatchType;
}

const MatchResultDetailItem: React.FC<Props> = ({ participant, matchData }) => {
  const kda = getKda(
    participant.kills,
    participant.deaths,
    participant.assists
  );

  const participantTeam = matchData.teams.find((team) => {
    return participant.win === team.win;
  });

  const teammates = matchData.participants.filter((item) => {
    return item.win === participant.win;
  });

  const damageDealtArray = teammates.map(
    (teammate) => teammate.totalDamageDealtToChampions
  );
  const highestDamageDealt = Math.max.apply(null, damageDealtArray);

  const damageProportion = Math.round(
    (participant.totalDamageDealtToChampions / highestDamageDealt) * 100
  );

  const killParticipation = getKillParticipation(
    participantTeam!.objectives.champion.kills,
    participant.kills,
    participant.assists
  );

  return (
    <Container win={participant.win} damageProportion={damageProportion}>
      <Avatar src={`/champion/${participant.championName}.png`} />
      <Flexbox flex="col" gap="0.1rem">
        <Avatar
          shape="boxier"
          size="16px"
          src={`/summoner-spell/${participant.summoner1Id}.jpeg`}
        />
        <Avatar
          shape="boxier"
          size="16px"
          src={`/summoner-spell/${participant.summoner2Id}.jpeg`}
        />
      </Flexbox>
      <Flexbox flex="col" gap="0.1rem">
        <Avatar
          size="16px"
          src={`/rune/${participant.perks.styles[0].selections[0].perk}.webp`}
          style={{ background: "black" }}
        />
        <Avatar
          size="16px"
          src={`/rune/${participant.perks.styles[1].style}.webp`}
        />
      </Flexbox>
      <Typography className="match-detail-summoner-name">
        {shortenText(participant.summonerName, 6)}
      </Typography>
      <Flexbox className="match-detail-kda" flex="col" gap="0.2rem">
        <Typography size="0.75rem">
          {participant.kills}/{participant.deaths}/{participant.assists} (
          {killParticipation}%)
        </Typography>
        <Typography size="0.75rem" weight={600} color={getKdaColor(kda)}>
          {kda}
          {kda !== "Perfect" && ":1"}
        </Typography>
      </Flexbox>
      <Flexbox className="match-detail-damage-dealt" flex="col" gap="0.4rem">
        <Typography size="0.75rem">
          {participant.totalDamageDealtToChampions.toLocaleString()}
        </Typography>
        <div className="dealt-damage-bar">
          <div className="dealt-damage-progression" />
        </div>
      </Flexbox>
      <Flexbox className="match-detail-ward" flex="col" gap="0.2rem">
        <Typography size="0.75rem">
          {participant.detectorWardsPlaced}
        </Typography>
        <Typography size="0.75rem">
          {participant.wardsPlaced} / {participant.wardsKilled}
        </Typography>
      </Flexbox>
      <Flexbox className="match-detail-cs" flex="col" gap="0.2rem">
        <Typography size="0.75rem">{participant.totalMinionsKilled}</Typography>
        <Typography size="0.75rem">
          분당{" "}
          {getCsPerMinute(
            new Date(matchData.gameDuration),
            participant.totalMinionsKilled
          )}
        </Typography>
      </Flexbox>
      <Flexbox className="match-detail-items" gap="0.1rem">
        <Avatar
          className="match-detail-item"
          size="22px"
          shape="boxier"
          src={
            participant.item0 !== 0
              ? `/item/${participant.item0}.png`
              : undefined
          }
        />
        <Avatar
          className="match-detail-item"
          size="22px"
          shape="boxier"
          src={
            participant.item1 !== 0
              ? `/item/${participant.item1}.png`
              : undefined
          }
        />
        <Avatar
          className="match-detail-item"
          size="22px"
          shape="boxier"
          src={
            participant.item2 !== 0
              ? `/item/${participant.item2}.png`
              : undefined
          }
        />
        <Avatar
          className="match-detail-item"
          size="22px"
          shape="boxier"
          src={
            participant.item3 !== 0
              ? `/item/${participant.item3}.png`
              : undefined
          }
        />
        <Avatar
          className="match-detail-item"
          size="22px"
          shape="boxier"
          src={
            participant.item4 !== 0
              ? `/item/${participant.item4}.png`
              : undefined
          }
        />
        <Avatar
          className="match-detail-item"
          size="22px"
          shape="boxier"
          src={
            participant.item5 !== 0
              ? `/item/${participant.item5}.png`
              : undefined
          }
        />
        <Avatar
          className="match-detail-item"
          size="22px"
          shape="boxier"
          src={
            participant.item6 !== 0
              ? `/item/${participant.item6}.png`
              : undefined
          }
        />
      </Flexbox>
    </Container>
  );
};

export default MatchResultDetailItem;
