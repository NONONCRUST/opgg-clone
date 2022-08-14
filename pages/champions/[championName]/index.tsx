import React from "react";
import { GetStaticProps, NextPage } from "next";
import ChampionDetailPage from "../../../components/pages/ChampionDetailPage";
import fs from "fs";
import { getChampions } from "../../../lib/api/riot";

export const getStaticPaths = async () => {
  const championList = await getChampions("12.15");

  const paths = championList.map((champion) => {
    return {
      params: { championName: champion.id },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const championName = params!.championName as string;

  const version = "12.15";

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
