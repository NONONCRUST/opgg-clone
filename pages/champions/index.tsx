import React from "react";
import { GetServerSideProps, NextPage } from "next";
import ChampionPage from "../../components/pages/ChampionPage";
import fs from "fs";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const version = context.query.version || "12.15";
  console.log(version);
  const championDataJSON = fs
    .readFileSync(`data/${version}/champion.json`)
    .toString();

  const championData = JSON.parse(championDataJSON);

  const championObject = championData.data;

  const championList = Object.keys(championObject).map(
    (key) => championObject[key]
  );

  return {
    props: {
      championList,
    },
  };
};

interface Props {
  championList: ChampionType[];
}

const index: NextPage<Props> = ({ championList }) => {
  return <ChampionPage championList={championList} />;
};

export default index;
