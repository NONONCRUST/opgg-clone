import { useQuery } from "@tanstack/react-query";
import {
  getChampion,
  getChampions,
  getCurrentGameBySummonerName,
  getMatchesBySummonerName,
  getSummonerByName,
} from "../lib/api/riot";
import { getCommentsByChampionName } from "./api/comment";

export const useSummonerQuery = (summonerName: string) =>
  useQuery(["summoner", summonerName], () => getSummonerByName(summonerName), {
    enabled: typeof summonerName === "string",
  });

export const useMatchesQuery = (summonerName: string) =>
  useQuery(
    ["matches", summonerName],
    () => getMatchesBySummonerName(summonerName),
    {
      enabled: typeof summonerName === "string",
    }
  );

export const useCurrentGameQuery = (summonerName: string) =>
  useQuery(["current"], () => getCurrentGameBySummonerName(summonerName), {
    enabled: typeof summonerName === "string",
  });

export const useChampionsQuery = (
  version: VersionType,
  championList: ChampionType[]
) =>
  useQuery(["champions"], () => getChampions(version), {
    initialData: championList,
  });

export const useChampionQuery = (
  version: VersionType,
  championName: string,
  champion: ChampionType
) =>
  useQuery(["champion"], () => getChampion(version, championName), {
    initialData: champion,
  });

export const useCommentsQuery = (championName: string) =>
  useQuery(["comments"], () => getCommentsByChampionName(championName));
