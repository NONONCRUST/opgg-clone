import React from "react";
import { GetServerSideProps, NextPage } from "next";
import SummonerPage from "../../../components/pages/SummonerPage";
import {
  getMatchesBySummonerName,
  getSummonerByName,
} from "../../../lib/api/riot";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const summonerName = context.query.name as string;
  const summonerData = await getSummonerByName(summonerName);
  const matchedSummonerName = summonerData.name;
  const matchesData = await getMatchesBySummonerName(matchedSummonerName);

  return {
    props: {
      initialSummonerData: summonerData,
      initialMatchesData: matchesData,
    },
  };
};

interface Props {
  initialSummonerData: GetSummonerByNameResponseType;
  initialMatchesData: GetMatchesBySummonerNameResponeType;
}

const index: NextPage<Props> = ({
  initialSummonerData,
  initialMatchesData,
}) => {
  return (
    <SummonerPage
      initialSummonerData={initialSummonerData}
      initialMatchesData={initialMatchesData}
    />
  );
};

export default index;
