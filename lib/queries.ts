import { useQuery } from "@tanstack/react-query";
import {
  getCurrentGameBySummonerName,
  getMatchesBySummonerName,
  getSummonerByName,
} from "../lib/api/riot";

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

export const useCurrentGameQuery = (
  summonerName: string,
  tab: "general" | "ingame"
) =>
  useQuery(["current"], () => getCurrentGameBySummonerName(summonerName), {
    enabled: typeof summonerName === "string" && tab === "ingame",
    staleTime: 3000,
  });
