import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import fs from "fs";
import {
  getLeagueBySummonerIdApi,
  getMatchByMatchIdApi,
  getMatchIdsByPuuidApi,
  getSummonerByNameApi,
} from "../../../../lib/api/riotApi";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const summonerName = req.query.summonerName;
    if (typeof summonerName !== "string") return res.status(400).end();

    try {
      const {
        data: { puuid },
      } = await getSummonerByNameApi(summonerName);
      console.log("puuid", puuid);

      const { data } = await getMatchIdsByPuuidApi(puuid);

      console.log("matchIds", data);

      const matchesPromise = data.slice(0, 10).map(async (matchId, index) => {
        const response = await getMatchByMatchIdApi(matchId);
        console.log("index", index);
        if (index === 0) console.log(response.data);
        return response.data;
      });

      const matchList = await Promise.all(matchesPromise);

      const filteredMatchList = matchList.map((match) => {
        const participants = match.info.participants.map((participant) => {
          return {
            summonerName: participant.summonerName,
            kills: participant.kills,
            assists: participant.assists,
            deaths: participant.deaths,
            champLevel: participant.champLevel,
            championName: participant.championName,
            detectorWardsPlaced: participant.detectorWardsPlaced,
            wardsPlaced: participant.wardsPlaced,
            wardsKilled: participant.wardsKilled,
            doubleKills: participant.doubleKills,
            tripleKills: participant.tripleKills,
            quadreKills: participant.quadraKills,
            pentaKills: participant.pentaKills,
            goldEarned: participant.goldEarned,
            individualPosition: participant.individualPosition,
            item0: participant.item0,
            item1: participant.item1,
            item2: participant.item2,
            item3: participant.item3,
            item4: participant.item4,
            item5: participant.item5,
            item6: participant.item6,
            totalDamageDealt: participant.totalDamageDealt,
            summoner1Id: participant.summoner1Id,
            summoner2Id: participant.summoner2Id,
            perks: participant.perks,
            totalMinionsKilled: participant.totalMinionsKilled,
            win: participant.win,
          };
        });

        return {
          summonerName: summonerName,
          gameStartTimestamp: match.info.gameStartTimestamp,
          gameEndTimestamp: match.info.gameEndTimestamp,
          gameId: match.info.gameId,
          gameDuration: match.info.gameDuration,
          gameMode: match.info.gameMode,
          teams: match.info.teams,
          participants: participants,
        };
      });

      fs.writeFileSync(
        `data/matches/${summonerName}.json`,
        JSON.stringify(filteredMatchList)
      );

      const summonerListJSON = fs
        .readFileSync("data/summoners.json")
        .toString();
      const summonerList = JSON.parse(summonerListJSON);
      const deletedSummonerList = summonerList.filter(
        (summoner: GetSummonerByNameResponseType) =>
          summoner.name.toLowerCase() !== summonerName.toLowerCase()
      );

      const response = await getSummonerByNameApi(summonerName);
      const { name, id, profileIconId, summonerLevel } = response.data;

      const leagueResponse = await getLeagueBySummonerIdApi(id);

      leagueResponse.data[0];

      const body = {
        name: name,
        profileIconId: profileIconId,
        summonerLevel: summonerLevel,
        queueType: leagueResponse.data[0]?.queueType,
        tier: leagueResponse.data[0]?.tier,
        rank: leagueResponse.data[0]?.rank,
        leaguePoints: leagueResponse.data[0]?.leaguePoints,
        wins: leagueResponse.data[0]?.wins,
        losses: leagueResponse.data[0]?.losses,
        updatedAt: new Date(),
      };

      fs.writeFileSync(
        "data/summoners.json",
        JSON.stringify([...deletedSummonerList, body])
      );

      res.status(200).end();
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  }

  return res.status(404).end();
};

export default handler;
