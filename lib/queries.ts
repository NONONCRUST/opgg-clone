import { useQuery } from "@tanstack/react-query";
import { getMatchesBySummonerName, getSummonerByName } from "../lib/api/riot";

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
