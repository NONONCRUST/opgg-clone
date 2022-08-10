import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useEffect } from "react";
import {
  getMatchesBySummonerName,
  getSummonerByName,
  requestFetchBySummonerName,
} from "../../lib/api/riot";
import {
  getMinuteDiff,
  mapRank,
  parseDateRelative,
  throttle,
} from "../../lib/utils";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import Card from "../common/Card";
import Divider from "../common/Divider";
import LoadingButton from "../common/LoadingButton";
import TabButton from "../common/TabButton";
import Typography from "../common/Typography";
import FavoriteIconButton from "../FavoriteIconButton";
import IngameNotFound from "../IngameNotFound";
import Flexbox from "../layouts/Flexbox";
import Layout from "../layouts/Layout";
import MatchResult from "../MatchResult/MatchResult";
import MatchResultNotFound from "../MatchResultNotFound";
import SoloRankInfoCard from "../SoloRankInfoCard";
import SummonerContentHeader from "../SummonerContentHeader";
import SummonerIconAvatar from "../SummonerIconAvatar";
import SummonerNotFound from "../SummonerNotFound";
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
  const [isSummonerLoading, setIsSummonerLoading] = useState(false);
  const [isMatchesLoading, setIsMatchesLoading] = useState(false);
  const [isFetching, setisFetching] = useState(false);
  const [summonerData, setSummonerData] =
    useState<GetSummonerByNameResponseType>();
  const [matchListData, setMatchListData] =
    useState<GetMatchesBySummonerNameResponeType>([]);
  const [activeTab, setActiveTab] = useState("general");

  const [summonerNotFound, setSummonerNotFound] = useState(false);

  const summonerName = useRouter().query.name as string;

  const fetchSummoner = useCallback(async () => {
    if (typeof summonerName !== "string") return;
    try {
      setIsSummonerLoading(true);
      const response = await getSummonerByName(summonerName);
      console.log(response);
      setSummonerData(response.data);
    } catch (error: any) {
      console.log(error);
      if (error.response.status === 400) {
        setSummonerNotFound(true);
      }
    } finally {
      setIsSummonerLoading(false);
    }
  }, [summonerName]);

  const fetchMatches = useCallback(async () => {
    if (typeof summonerName !== "string") return;
    try {
      setIsMatchesLoading(true);
      const response = await getMatchesBySummonerName(summonerName);
      console.log(response.data);
      setMatchListData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsMatchesLoading(false);
    }
  }, [summonerName]);

  const onClickFetchButton = async () => {
    setisFetching(true);
    try {
      const response = await requestFetchBySummonerName(summonerName);
      console.log(response);
      fetchMatches();
      fetchSummoner();
    } catch (error) {
      console.log(error);
    } finally {
      setisFetching(false);
    }
  };

  useEffect(() => {
    fetchSummoner();
    fetchMatches();
  }, [fetchSummoner, fetchMatches]);

  if (summonerNotFound) return <SummonerNotFound />;

  return (
    <Base>
      <Head>
        <title>{summonerName} - 게임 전적</title>
      </Head>
      <div className="content-header-area">
        {summonerData && (
          <SummonerContentHeader
            summonerData={summonerData}
            isFetching={isFetching}
            onClickFetchButton={onClickFetchButton}
          />
        )}
        <Divider />
        <Layout>
          <Flexbox padding="0.2rem 0" justify="start" gap="0.2rem">
            <TabButton
              type="general"
              active={activeTab === "general"}
              onClick={() => setActiveTab("general")}
            >
              종합
            </TabButton>
            <TabButton
              type="ingame"
              active={activeTab === "ingame"}
              onClick={() => setActiveTab("ingame")}
            >
              인게임 정보
            </TabButton>
          </Flexbox>
        </Layout>
      </div>
      <div className="content-area">
        <Layout>
          <Card className="ad" height="6rem" />
          {activeTab === "general" && (
            <div className="content-area-match">
              <div className="content-area-match-left">
                {summonerData && (
                  <SoloRankInfoCard
                    isLoading={isSummonerLoading}
                    summonerData={summonerData}
                  />
                )}
                {/* <Card height="6rem">자유랭크</Card> */}
                {/* <Card height="20rem">챔피언별</Card> */}
              </div>
              <div className="content-area-match-right">
                {/* <Card height="14rem">요약</Card> */}
                {!isMatchesLoading && matchListData.length === 0 && (
                  <MatchResultNotFound />
                )}
                <Flexbox flex="col" gap="0.5rem">
                  {/* {isMatchesLoading && <div>게임 결과를 불러오는중..</div>} */}
                  {matchListData &&
                    matchListData.map((matchData, index) => (
                      <MatchResult
                        key={index}
                        matchData={matchData}
                        summonerName={summonerName}
                      />
                    ))}
                </Flexbox>
              </div>
            </div>
          )}
          {activeTab === "ingame" && (
            <IngameNotFound summonerName={summonerName} />
          )}
        </Layout>
      </div>
    </Base>
  );
};

export default SummonerPage;
