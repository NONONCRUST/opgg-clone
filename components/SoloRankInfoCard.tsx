import React from "react";
import styled from "@emotion/styled";
import Card from "@components/common/Card";
import Divider from "@components/common/Divider";
import Typography from "@components/common/Typography";
import Flexbox from "@components/layouts/Flexbox";
import RankEmblemAvatar from "@components/RankEmblemAvatar";
import { theme } from "@styles/theme";
import { capitalize, getWinRate, mapRank } from "@lib/utils";
import { gray } from "@styles/palette";

const Container = styled.section`
  width: 100%;

  .solo-rank-info-card {
    width: 100%;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .solo-rank-info-card {
      width: 20rem;
    }
  }
`;

interface Props {
  isLoading: boolean;
  summonerData: GetSummonerByNameResponseType;
}

const SoloRankInfoCard: React.FC<Props> = ({ summonerData, isLoading }) => {
  return (
    <Container>
      <Card className="solo-rank-info-card">
        <Flexbox padding="1rem" justify="between">
          <Typography size="0.875rem">솔로랭크</Typography>
          {!summonerData.tier && (
            <Typography color={gray[300]} weight={600}>
              Unranked
            </Typography>
          )}
        </Flexbox>
        {summonerData.tier && (
          <>
            <Divider />
            <Flexbox padding="1rem" justify="between">
              <Flexbox gap="1rem">
                <RankEmblemAvatar tier={summonerData.tier.toLowerCase()} />
                <Flexbox flex="col" items="start" gap="0.5rem">
                  <Typography size="1.25rem" weight={700}>
                    {capitalize(summonerData.tier)}{" "}
                    {summonerData.tier !==
                      ("GRANDMASTER" || "CHALLENGER" || "MASTER") &&
                      mapRank(summonerData.rank)}
                  </Typography>
                  <Typography size="0.75rem" color={gray[500]}>
                    {summonerData.leaguePoints} LP
                  </Typography>
                </Flexbox>
              </Flexbox>
              <Flexbox flex="col" gap="0.5rem" items="end">
                <Typography size="0.75rem" color={gray[400]}>
                  {summonerData.wins}승 {summonerData.losses}패
                </Typography>
                <Typography size="0.75rem" color={gray[400]}>
                  승률 {getWinRate(summonerData.wins, summonerData.losses)}%
                </Typography>
              </Flexbox>
            </Flexbox>
          </>
        )}
      </Card>
    </Container>
  );
};

export default SoloRankInfoCard;
