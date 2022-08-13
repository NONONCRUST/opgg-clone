import axios from ".";

export const getRotation = async () => {
  const response = await axios.get<GetRotationApiResponseType>("/rotation");
  return response.data;
};

export const getSummonerByName = async (summonerName: string) => {
  const response = await axios.get<GetSummonerByNameResponseType>(
    `/summoner/${encodeURIComponent(summonerName)}`
  );
  return response.data;
};

export const getFeaturedGame = async () => {
  const response = await axios.get<GetFeaturedGameApiResponseType>(
    "/spectator/featured-game"
  );
  return response.data;
};

export const getCurrentGameBySummonerName = async (summonerName: string) => {
  const response = await axios.get<GetCurrentGameBySummonerNameResponseType>(
    `/spectator/summoner/${encodeURIComponent(summonerName)}`
  );
  return response.data;
};
export const getPlatformData = async () => {
  const response = await axios.get<GetPlatformDataApiResponseType>("/platform");
  return response.data;
};

export const getMatchesBySummonerName = async (summonerName: string) => {
  const response = await axios.get<GetMatchesBySummonerNameResponeType>(
    `/matches/${encodeURIComponent(summonerName)}`
  );
  return response.data;
};

export const requestFetchBySummonerName = async (summonerName: string) => {
  const response = await axios.get(
    `/fetch/${encodeURIComponent(summonerName)}`
  );
  return response.data;
};

export const getChampions = async (version: VersionType) => {
  const response = await axios.get<GetChampionsResponseType>(
    `/champions?version=${version}`
  );
  return response.data;
};

export const getChampion = async (
  version: VersionType,
  championName: string
) => {
  const response = await axios.get<GetChampionResponseType>(
    `/champions/${championName}?version=${version}`
  );
  return response.data;
};
