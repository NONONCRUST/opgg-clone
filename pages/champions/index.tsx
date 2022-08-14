import React from "react";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import ChampionPage from "../../components/pages/ChampionPage";
import { getChampions } from "../../lib/api/riot";

export const getStaticProps: GetStaticProps = async () => {
  const version = "12.15";
  const response = await getChampions(version as VersionType);

  const championList = response;
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
