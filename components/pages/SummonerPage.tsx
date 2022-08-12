import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { requestFetchBySummonerName } from "../../lib/api/riot";
import {
  useCurrentGameQuery,
  useMatchesQuery,
  useSummonerQuery,
} from "../../lib/queries";
import { theme } from "../../styles/theme";
import Card from "../common/Card";
import Divider from "../common/Divider";
import IngameNotFound from "../IngameNotFound";
import Flexbox from "../layouts/Flexbox";
import Layout from "../layouts/Layout";
import MatchResult from "../MatchResult/MatchResult";
import MatchResultNotFound from "../MatchResultNotFound";
import SoloRankInfoCard from "../SoloRankInfoCard";
import SummonerContentHeader from "../SummonerContentHeader";
import SummonerContentTab from "../SummonerContentTab";
import SummonerNotFound from "../SummonerNotFound";
import MatchSummaryCard from "../MatchSummaryCard";
import { useDispatch, useSelector } from "../../store";
import { searchActions } from "../../store/searchSlice";
import CurrentGameCard from "../CurrentGame/CurrentGameCard";
import { gray } from "../../styles/palette";

const Base = styled.main`
  .content-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 0.5rem;
    background-color: ${gray[100]};
  }

  .ad {
    margin-bottom: 0.5rem;
  }

  .content-area-match {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
        background-color: ${gray[700]};
      }

      .content-area {
        background-color: ${gray[900]};
      }
    `}

  @media screen and (min-width: ${theme.media.desktop}) {
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
  const [isFetching, setisFetching] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "ingame">("general");

  const championSearchFilter = useSelector(
    (state) => state.search.championSearchFilter
  );

  const dispatch = useDispatch();

  const summonerName = useRouter().query.name as string;

  const {
    data: summonerQuery,
    isLoading: isSummonerLoading,
    refetch: refetchSummoner,
  } = useSummonerQuery(summonerName);

  const {
    data: matchesQuery,
    isLoading: isMatchesLoading,
    refetch: refetchMatches,
  } = useMatchesQuery(summonerName);

  const { data: currentGameQuery } = useCurrentGameQuery(summonerName);

  const summonerData = summonerQuery?.data;
  const matchesData = matchesQuery?.data;
  const matchListData = matchesData?.matches;
  const currentGameData = currentGameQuery?.data;

  const isIngame = currentGameData ? true : false;

  const filteredMatchListData = matchListData?.filter((match) => {
    if (championSearchFilter === "") return match;
    const me = match.participants.find(
      (participant) => participant.summonerName === summonerName
    );
    return me?.championName === championSearchFilter;
  });

  const onClickFetchButton = async () => {
    setisFetching(true);
    try {
      const response = await requestFetchBySummonerName(summonerName);
      console.log(response);
      refetchMatches();
      refetchSummoner();
    } catch (error) {
      console.log(error);
    } finally {
      setisFetching(false);
    }
  };

  useEffect(() => {
    dispatch(searchActions.setChampionSearchFilter(""));
    setActiveTab("general");
  }, [dispatch, summonerName]);

  if (summonerQuery?.status === 204) return <SummonerNotFound />;

  return (
    <Base>
      <Head>
        <title>{summonerName} - 게임 전적</title>
      </Head>
      <div className="content-header-area">
        {summonerData && (
          <SummonerContentHeader
            summonerData={summonerData}
            updatedAt={matchesData?.updatedAt}
            isFetching={isFetching}
            onClickFetchButton={onClickFetchButton}
          />
        )}
        <Divider />
        <SummonerContentTab
          isIngame={isIngame}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
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
              </div>
              <div className="content-area-match-right">
                {matchListData && (
                  <MatchSummaryCard
                    matchListData={matchListData}
                    summonerName={summonerName}
                  />
                )}
                {!isMatchesLoading &&
                  filteredMatchListData &&
                  filteredMatchListData.length === 0 && <MatchResultNotFound />}
                <Flexbox flex="col" gap="0.5rem">
                  {filteredMatchListData &&
                    filteredMatchListData.map((matchData, index) => (
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
            <>
              {currentGameData && (
                <CurrentGameCard currentGameData={currentGameData} />
              )}
              {!currentGameData && (
                <IngameNotFound summonerName={summonerName} />
              )}
            </>
          )}
        </Layout>
      </div>
    </Base>
  );
};

export default SummonerPage;
