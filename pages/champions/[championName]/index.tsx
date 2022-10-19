import { GetStaticProps, NextPage } from 'next';
import ChampionDetailPage from '@components/pages/ChampionDetailPage';
import { getChampion, getChampions } from '@lib/api/riot';
import { VERSION } from '@lib/constants';

export const getStaticPaths = async () => {
  const championList = await getChampions(VERSION);

  const paths = championList.map((champion) => {
    return {
      params: { championName: champion.id },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const championName = params!.championName as string;

  const version = VERSION;

  const initialChampionData = await getChampion(version, championName);

  return {
    props: {
      initialChampionData,
    },
  };
};

interface Props {
  initialChampionData: ChampionDetailType;
}

const index: NextPage<Props> = ({ initialChampionData }) => {
  return <ChampionDetailPage initialChampionData={initialChampionData} />;
};

export default index;
