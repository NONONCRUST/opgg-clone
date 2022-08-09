import axios from ".";

export const getRotation = () =>
  axios.get<GetRotationResponseType>("/rotation");

export const getSummonerByName = (summonerName: string) =>
  axios.get<GetSummonerByNameResponseType>(
    `/summoner/${encodeURIComponent(summonerName)}`
  );

export const getFeaturedGame = () =>
  axios.get<GetFeaturedGameResponseType>("/spectator/featured-game");

export const getCurrentGameBySummonerName = (summonerName: string) =>
  axios.get<GetCurrentGameBySummonerNameResponseType>(
    `/spectator/summoner/${encodeURIComponent(summonerName)}`
  );

export const getPlatformData = () =>
  axios.get<GetPlatformDataResponseType>("/platform");

export const getMatchesBySummonerName = (summonerName: string) =>
  axios.get<GetMatchByMatchIdResponseType>(
    `/matches/${encodeURIComponent(summonerName)}`
  );
