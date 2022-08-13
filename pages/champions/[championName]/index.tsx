import React from "react";
import { GetServerSideProps, NextPage } from "next";
import ChampionDetailPage from "../../../components/pages/ChampionDetailPage";
import fs from "fs";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const championName = context.query.championName as string;

  const version = context.query.version || "12.15";
  const championDataJSON = fs
    .readFileSync(`data/${version}/champion.json`)
    .toString();

  const championData = JSON.parse(championDataJSON);

  const championObject = championData.data;

  const champion = championObject[championName];

  return {
    props: {
      champion,
    },
  };
};

interface Props {
  champion: ChampionType;
}

const index: NextPage<Props> = ({ champion }) => {
  return <ChampionDetailPage champion={champion} />;
};

export default index;
