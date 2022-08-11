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
  axios.get<GetCurrentGameBySummonerNameResponseType>(
    `/spectator/summoner/${encodeURIComponent(summonerName)}`
  );

export const getPlatformData = () =>
  axios.get<GetPlatformDataApiResponseType>("/platform");

export const getMatchesBySummonerName = (summonerName: string) =>
  axios.get<GetMatchesBySummonerNameResponeType>(
    `/matches/${encodeURIComponent(summonerName)}`
  );

export const requestFetchBySummonerName = (summonerName: string) =>
  axios.get(`/fetch/${encodeURIComponent(summonerName)}`);
