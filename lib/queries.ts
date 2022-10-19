import { useQuery } from '@tanstack/react-query';
import {
  getChampion,
  getChampions,
  getCurrentGameBySummonerName,
  getMatchesBySummonerName,
  getSummonerByName,
  getSummoners,
} from '@lib/api/riot';
import { getCommentsByChampionName } from '@lib/api/comment';

export const useSummonerQuery = (
  summonerName: string,
  initialData: GetSummonerByNameResponseType,
) =>
  useQuery(['summoner', summonerName], () => getSummonerByName(summonerName), {
    enabled: typeof summonerName === 'string',
    initialData,
  });

export const useSummonersQuery = (query?: string) =>
  useQuery(['summoners', query], () => getSummoners(query), {
    enabled: query !== '',
  });

export const useMatchesQuery = (
  summonerName: string,
  initialData: GetMatchesBySummonerNameResponeType,
) =>
  useQuery(
    ['matches', summonerName],
    () => getMatchesBySummonerName(summonerName),
    {
      enabled: typeof summonerName === 'string',
      initialData,
    },
  );

export const useCurrentGameQuery = (summonerName: string) =>
  useQuery(['current'], () => getCurrentGameBySummonerName(summonerName), {
    enabled: typeof summonerName === 'string',
  });

export const useChampionsQuery = (
  version: VersionType,
  championList: ChampionType[],
) =>
  useQuery(['champions'], () => getChampions(version), {
    initialData: championList,
  });

export const useChampionQuery = (
  version: VersionType,
  championName: string,
  champion: ChampionDetailType,
) =>
  useQuery(['champion'], () => getChampion(version, championName), {
    initialData: champion,
  });

export const useCommentsQuery = (championName: string) =>
  useQuery(['comments'], () => getCommentsByChampionName(championName));
