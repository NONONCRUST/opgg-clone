import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import Card from "../common/Card";
import Typography from "../common/Typography";
import FavoriteIconButton from "../FavoriteIconButton";
import Flexbox from "../layouts/Flexbox";
import Layout from "../layouts/Layout";
import MatchResult from "../MatchResult/MatchResult";
import SoloRankInfoCard from "../SoloRankInfoCard";
import SummonerIconAvatar from "../SummonerIconAvatar";
import TierHistoryChip from "../TierHistoryChip";

const Base = styled.main`
  .content-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
    background-color: ${palette.gray[100]};
  }

  .summoner-container {
    display: flex;
    padding: 1rem;
    gap: 1.5rem;
  }

  .ad {
    margin-bottom: 1rem;
  }

  .content-area-match {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  .content-area-match-left {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 100%;
  }

  .content-area-match-right {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      .content-header-area {
        background-color: ${palette.gray[700]};
      }

      .content-area {
        background-color: ${palette.gray[900]};
      }
    `}

  @media screen and (min-width: ${theme.media.desktop}) {
    .summoner-container {
      padding: 3rem 0;
    }

    .content-area-match {
      flex-direction: row;
      width: auto;
    }

    .content-area-match-left {
      width: auto;
    }
  }
`;

const SummonerPage: React.FC = () => {
  const summonerName = useRouter().query.name;

  return (
    <Base>
      <div className="content-header-area">
        <Layout>
          <div className="summoner-container">
            <SummonerIconAvatar level={123} iconNumber={4644} />
            <Flexbox flex="col" justify="start" items="start" gap="0.5rem">
              <Flexbox gap="0.25rem">
                <TierHistoryChip season="2022" tier="master" />
                <TierHistoryChip season="2021" tier="master" />
                <TierHistoryChip season="2020" tier="master" />
              </Flexbox>
              <Flexbox gap="0.5rem">
                <Typography size="1.5rem" weight={600}>
                  {summonerName}
                </Typography>
                <FavoriteIconButton isFavorite={false} />
              </Flexbox>
              <Typography size="0.75rem" color={palette.gray[500]}>
                래더 랭킹:{" "}
                <span style={{ color: palette.blue[500] }}>1,238 위</span> (상위
                0.0316%)
              </Typography>
              <Button>전적 갱신</Button>
              <Typography size="0.75rem" color={palette.gray[400]}>
                최근 업데이트: 23분 전
              </Typography>
            </Flexbox>
          </div>
        </Layout>
      </div>
      <div className="content-area">
        <Layout>
          <Card className="ad" height="8rem">
            광고
          </Card>
          <div className="content-area-match">
            <div className="content-area-match-left">
              <SoloRankInfoCard />
              <Card height="6rem">자유랭크</Card>
              <Card height="20rem">챔피언별</Card>
            </div>
            <div className="content-area-match-right">
              <Card height="14rem">요약</Card>
              <Flexbox flex="col" gap="0.5rem">
                <MatchResult result="win" />
                <MatchResult result="lose" />
              </Flexbox>
            </div>
          </div>
        </Layout>
      </div>
    </Base>
  );
};

export default SummonerPage;
