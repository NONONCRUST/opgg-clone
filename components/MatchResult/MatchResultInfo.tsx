import React from "react";
import styled from "@emotion/styled";
import { getCsPerMinute, getKda, getKillParticipation } from "../../lib/utils";
import { theme } from "../../styles/theme";
import Avatar from "../common/Avatar";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";
import MatchResultChampionAvatar from "./MatchResultChampionAvatar";
import MatchResultChip from "./MatchResultChip";
import { blue, gray, red } from "../../styles/palette";

interface ContainerProps {
  result: "win" | "lose";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.2rem;

  .champion-area {
    display: flex;
    gap: 0.2rem;
  }

  .rune-avatar {
    background-color: black;
  }

  .item-avatar {
    background-color: ${({ result }) =>
      result === "win" ? blue[200] : red[200]};
  }

  .kda-area {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    min-width: 8rem;
    padding: 0 1rem;
  }

  .death-text {
    color: ${red[500]};
  }

  .text-divider {
    font-weight: 400;
    color: ${gray[400]};
  }

  .stats-area {
    min-width: 5rem;

    display: none;
    flex-direction: column;
    gap: 0.2rem;

    margin-right: 2rem;
    padding: 0 0.5rem;
    border-left: 1px solid
      ${({ result }) => (result === "win" ? blue[100] : red[100])};
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .stats-area {
      display: flex;
    }
  }
`;

interface Props {
  matchData: MatchType;
  result: "win" | "lose";
  summonerName: string;
}

const MatchResultInfo: React.FC<Props> = ({
  matchData,
  result,
  summonerName,
}) => {
  const me = matchData.participants?.find(
    (participant) => participant.summonerName === summonerName
  );

  const getWin = (win: boolean) => {
    if (win) return "win";
    if (!win) return "lose";
  };

  const getKillingSpree = () => {
    if (me?.pentaKills && me.pentaKills > 0) return "penta";
    if (me?.quadraKills && me.quadraKills > 0) return "quadra";
    if (me?.tripleKills && me.tripleKills > 0) return "triple";
    if (me?.doubleKills && me.doubleKills > 0) return "double";

    return undefined;
  };

  const myTeam = matchData.teams?.find((team) => getWin(team.win) === result);

  const winnerTeam = matchData.participants.filter((participant) => {
    return participant.win === true;
  });

  const loserTeam = matchData.participants.filter((participant) => {
    return participant.win === false;
  });

  const getIsMvp = () => {
    if (
      me &&
      myTeam?.win &&
      getKda(me.kills, me.deaths, me.assists) === "Perfect"
    )
      return true;

    const mvp = winnerTeam.reduce((prev, cur) => {
      if (
        getKda(cur.kills, cur.deaths, cur.assists) >
        getKda(prev.kills, prev.deaths, prev.assists)
      ) {
        return cur;
      } else {
        return prev;
      }
    });

    return mvp.summonerName === me?.summonerName ? true : false;
  };

  const getIsAce = () => {
    if (
      me &&
      !myTeam?.win &&
      getKda(me.kills, me.deaths, me.assists) === "Perfect"
    )
      return true;

    const ace = loserTeam.reduce((prev, cur) => {
      if (
        getKda(cur.kills, cur.deaths, cur.assists) >
        getKda(prev.kills, prev.deaths, prev.assists)
      ) {
        return cur;
      } else {
        return prev;
      }
    });

    return ace.summonerName === me?.summonerName ? true : false;
  };

  return (
    <Container result={result}>
      {me && myTeam && (
        <>
          <Flexbox>
            <div className="champion-area">
              {me && (
                <MatchResultChampionAvatar
                  champion={me.championName}
                  level={me.champLevel}
                />
              )}
              <Flexbox flex="col" gap="0.2rem">
                <Avatar
                  size="22px"
                  src={`/summoner-spell/${me.summoner1Id}.jpeg`}
                  shape="boxier"
                  alt="summoner spell"
                />
                <Avatar
                  size="22px"
                  src={`/summoner-spell/${me.summoner2Id}.jpeg`}
                  shape="boxier"
                  alt="summoner spell"
                />
              </Flexbox>
              <Flexbox flex="col" gap="0.2rem">
                <Avatar
                  className="rune-avatar"
                  size="22px"
                  src={`/rune/${me.perks.styles[0].selections[0].perk}.webp`}
                  alt="summoner rune"
                />
                <Avatar
                  size="22px"
                  src={`/rune/${me.perks.styles[1].style}.webp`}
                  shape="boxier"
                  alt="summoner rune"
                />
              </Flexbox>
            </div>
            <div className="kda-area">
              <Typography weight={600}>
                {me.kills} <span className="text-divider">/</span>{" "}
                <span className="death-text">{me.deaths}</span>{" "}
                <span className="text-divider">/</span> {me.assists}
              </Typography>
              <Typography size="12px" color={gray[500]}>
                {getKda(me.kills, me.deaths, me.assists)} 평점
              </Typography>
            </div>
            <div className="stats-area">
              <Typography size="11px" color={red[500]}>
                킬관여{" "}
                {getKillParticipation(
                  myTeam.objectives.champion.kills,
                  me.kills,
                  me.assists
                )}
                %
              </Typography>
              <Typography size="11px" color={gray[500]}>
                제어와드 {me.detectorWardsPlaced}
              </Typography>
              <Typography size="11px" color={gray[500]}>
                CS {me.totalMinionsKilled} (
                {getCsPerMinute(
                  new Date(matchData.gameDuration),
                  me.totalMinionsKilled
                )}
                )
              </Typography>
            </div>
          </Flexbox>
          <Flexbox gap="0.15rem" justify="start">
            <Avatar
              className="item-avatar"
              src={me.item0 !== 0 ? `/item/${me.item0}.png` : undefined}
              size="22px"
              shape="boxier"
              alt="item"
            />
            <Avatar
              className="item-avatar"
              src={me.item1 !== 0 ? `/item/${me.item1}.png` : undefined}
              size="22px"
              shape="boxier"
              alt="item"
            />
            <Avatar
              className="item-avatar"
              src={me.item2 !== 0 ? `/item/${me.item2}.png` : undefined}
              size="22px"
              shape="boxier"
              alt="item"
            />
            <Avatar
              className="item-avatar"
              src={me.item3 !== 0 ? `/item/${me.item3}.png` : undefined}
              size="22px"
              shape="boxier"
              alt="item"
            />
            <Avatar
              className="item-avatar"
              src={me.item4 !== 0 ? `/item/${me.item4}.png` : undefined}
              size="22px"
              shape="boxier"
              alt="item"
            />
            <Avatar
              className="item-avatar"
              src={me.item5 !== 0 ? `/item/${me.item5}.png` : undefined}
              size="22px"
              shape="boxier"
              alt="item"
            />
            <Avatar
              size="22px"
              src={`/trinket/${me.item6}.jpeg`}
              alt="summoner trinket"
            />
            {getKillingSpree() && (
              <MatchResultChip variant={getKillingSpree()} />
            )}
            {getIsMvp() && <MatchResultChip variant="mvp" />}
            {getIsAce() && <MatchResultChip variant="ace" />}
          </Flexbox>
        </>
      )}
    </Container>
  );
};

export default MatchResultInfo;
