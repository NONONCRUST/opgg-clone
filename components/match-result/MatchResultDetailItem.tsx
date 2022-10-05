import React from "react";
import styled from "@emotion/styled";
import {
  getCsPerMinute,
  getKda,
  getKillParticipation,
  shortenText,
} from "@lib/utils";
import { theme } from "@styles/theme";
import Avatar from "@components/common/Avatar";
import Typography from "@components/common/Typography";
import Flexbox from "@components/layouts/Flexbox";
import MatchResultDetailAvatar from "@components/match-result/MatchResultDetailAvatar";
import { blue, gray, red, teal, yellow } from "@styles/palette";

const getKdaColor = (kda: string | number) => {
  if (kda === "Perfect") return yellow[500];
  if (kda < 3) return gray[500];
  if (kda > 3 && kda < 4) return teal[500];
  if (kda > 4 && kda < 5) return theme.primary;
  if (kda > 5) return yellow[500];
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
  color: ${gray[500]};

  background-color: ${({ win }) => (win ? blue[50] : red[50])};

  .match-detail-summoner-name {
    margin-left: 0.5rem;
    width: 6rem;
    color: ${gray[900]};
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
    background-color: ${({ win }) => (win ? blue[200] : red[200])};
  }

  .dealt-damage-bar {
    width: 3.2rem;
    height: 0.4rem;
    background-color: white;
  }

  .dealt-damage-progression {
    width: ${({ damageProportion }) => damageProportion}%;
    height: 0.4rem;
    background-color: ${red[500]};
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

  const itemArray = [
    participant.item0,
    participant.item1,
    participant.item2,
    participant.item3,
    participant.item4,
    participant.item5,
    participant.item6,
  ];

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
      <MatchResultDetailAvatar
        championName={participant.championName}
        championLevel={participant.champLevel}
      />
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
        {itemArray.map((item, index) => (
          <Avatar
            key={index}
            className="match-detail-item"
            size="22px"
            shape="boxier"
            src={item !== 0 ? `/item/${item}.png` : undefined}
          />
        ))}
      </Flexbox>
    </Container>
  );
};

export default MatchResultDetailItem;
