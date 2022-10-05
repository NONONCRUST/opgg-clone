import React, { useCallback, useEffect, useMemo, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { useRouter } from "next/router";
import { theme } from "@styles/theme";
import { gray } from "@styles/palette";
import Card from "@components/common/Card";
import Divider from "@components/common/Divider";
import IngameNotFound from "@components/IngameNotFound";
import Flexbox from "@components/layouts/Flexbox";
import Layout from "@components/layouts/Layout";
import MatchResult from "@components/match-result/MatchResult";
import MatchResultNotFound from "@components/MatchResultNotFound";
import SoloRankInfoCard from "@components/SoloRankInfoCard";
import SummonerContentHeader from "@components/SummonerContentHeader";
import SummonerContentTab from "@components/SummonerContentTab";
import SummonerNotFound from "@components/SummonerNotFound";
import MatchSummaryCard from "@components/MatchSummaryCard";
import CurrentGameCard from "@components/current-game/CurrentGameCard";
import HeadMeta from "@components/HeadMeta";
import {
  useCurrentGameQuery,
  useMatchesQuery,
  useSummonerQuery,
} from "@lib/queries";
import { requestFetchBySummonerName } from "@lib/api/riot";
import { useDispatch, useSelector } from "@store/index";
import { searchActions } from "@store/searchSlice";
import useSearchHistory from "@hooks/useSearchHistory";

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

interface Props {
  initialSummonerData: GetSummonerByNameResponseType;
  initialMatchesData: GetMatchesBySummonerNameResponeType;
}

const SummonerPage: React.FC<Props> = ({
  initialSummonerData,
  initialMatchesData,
}) => {
  const [isFetching, setisFetching] = useState(false);
  const [activeTab, setActiveTab] = useState<"general" | "ingame">("general");

  const championSearchFilter = useSelector(
    (state) => state.search.championSearchFilter
  );

  const dispatch = useDispatch();

  const router = useRouter();

  const { addSearchHistory } = useSearchHistory();

  const summonerName = router.query.name as string;

  const {
    data: summonerData,
    isLoading: isSummonerLoading,
    refetch: refetchSummoner,
    isError: isSummonerNotFound,
  } = useSummonerQuery(summonerName, initialSummonerData);

  const matchedSummonerName = summonerData?.name;

  const {
    data: matchesData,
    isLoading: isMatchesLoading,
    refetch: refetchMatches,
  } = useMatchesQuery(matchedSummonerName, initialMatchesData);

  const { data: currentGameData } = useCurrentGameQuery(matchedSummonerName);

  const matchListData = matchesData?.matches;

  const isIngame = useMemo(
    () => (currentGameData ? true : false),
    [currentGameData]
  );

  const filteredMatchListData = useMemo(
    () =>
      matchListData?.filter((match) => {
        if (championSearchFilter === "") return match;
        const me = match.participants.find(
          (participant) => participant.summonerName === matchedSummonerName
        );
        return me?.championName === championSearchFilter;
      }),
    [championSearchFilter, matchListData, matchedSummonerName]
  );

  const onClickFetchButton = useCallback(async () => {
    setisFetching(true);
    try {
      await requestFetchBySummonerName(summonerName);
      refetchMatches();
      refetchSummoner();
    } catch (error) {
      console.log(error);
    } finally {
      setisFetching(false);
    }
  }, [refetchMatches, refetchSummoner, summonerName]);

  useEffect(() => {
    dispatch(searchActions.setChampionSearchFilter(""));
    setActiveTab("general");
  }, [dispatch, summonerName]);

  useEffect(() => {
    if (matchedSummonerName) addSearchHistory(matchedSummonerName);
  }, [matchedSummonerName, addSearchHistory]);

  if (isSummonerNotFound) return <SummonerNotFound />;

  return (
    <Base>
      <HeadMeta
        title={`${summonerData.name} - 게임 전적`}
        description={`${summonerData.name} / ${summonerData.tier} ${summonerData.rank} ${summonerData.leaguePoints}LP / ${summonerData.wins}승 ${summonerData.losses}패`}
      />
      <Head>
        <title>{matchedSummonerName} - 게임 전적</title>
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
                    summonerName={matchedSummonerName}
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
                        summonerName={matchedSummonerName}
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
                <IngameNotFound summonerName={matchedSummonerName} />
              )}
            </>
          )}
        </Layout>
      </div>
    </Base>
  );
};

export default SummonerPage;
