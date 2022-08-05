// API Routes에서 라이엇 api에 요청을 보낼 때 사용하는 api 목록
import { axiosRiotAsia, axiosRiotKr } from ".";

export const getRotationApi = () =>
  axiosRiotKr.get<GetRotationResponseType>(
    "/lol/platform/v3/champion-rotations"
  );

export const getSummonerByNameApi = (summonerName: string) =>
  axiosRiotKr.get<GetSummonerByNameResponseType>(
    `/lol/summoner/v4/summoners/by-name/${encodeURIComponent(summonerName)}`
  );

export const getFeaturedGameApi = () =>
  axiosRiotKr.get<GetFeaturedGameResponseType>(
    "/lol/spectator/v4/featured-games"
  );

export const getCurrentGameBySummonerNameApi = (summonerId: string) =>
  axiosRiotKr.get<GetCurrentGameBySummonerNameResponseType>(
    `/lol/spectator/v4/active-games/by-summoner/${summonerId}`
  );

export const getPlatformDataApi = () =>
  axiosRiotKr.get<GetPlatformDataResponseType>("/lol/status/v4/platform-data");

export const getMatchIdsByPuuidApi = (puuid: string) =>
  axiosRiotAsia.get<GetMatchIdsByPuuidResponseType>(
    `/lol/match/v5/matches/by-puuid/${puuid}/ids`
  );

export const getMatchByMatchId = (matchId: string) =>
  axiosRiotAsia.get<GetMatchByMatchIdResponseType>(
    `lol/match/v5/matches/${matchId}`
  );
