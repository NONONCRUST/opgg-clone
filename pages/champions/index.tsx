import { GetStaticProps, NextPage } from "next";
import ChampionPage from "@components/pages/ChampionPage";
import { getChampions } from "@lib/api/riot";
import { VERSION } from "@lib/constants";

export const getStaticProps: GetStaticProps = async () => {
  const response = await getChampions(VERSION as VersionType);

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
