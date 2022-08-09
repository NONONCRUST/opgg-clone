import axios from ".";

export const getRotation = () =>
  axios.get<GetRotationApiResponseType>("/rotation");

export const getSummonerByName = (summonerName: string) =>
  axios.get<GetSummonerByNameResponseType>(
    `/summoner/${encodeURIComponent(summonerName)}`
  );

export const getFeaturedGame = () =>
  axios.get<GetFeaturedGameApiResponseType>("/spectator/featured-game");

export const getCurrentGameBySummonerName = (summonerName: string) =>
  axios.get<GetCurrentGameBySummonerNameApiResponseType>(
    `/spectator/summoner/${encodeURIComponent(summonerName)}`
  );

export const getPlatformData = () =>
  axios.get<GetPlatformDataApiResponseType>("/platform");

export const getMatchesBySummonerName = (summonerName: string) =>
  axios.get<GetMatchByMatchIdApiResponseType>(
    `/matches/${encodeURIComponent(summonerName)}`
  );
