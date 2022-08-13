import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import {
  getLeagueBySummonerIdApi,
  getSummonerByNameApi,
} from "../../../../lib/api/riotApi";
import connectMongo from "../../../../lib/mongodb";
import SummonerModel from "../../../../models/summonerModel";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const summonerName = req.query.summonerName;
    if (typeof summonerName !== "string") return res.status(400).end();
    console.log("summoner name:", summonerName);

    /* --------------------------------------------- */
    try {
      console.log("connecting to mongodb...");
      const connectResult = await connectMongo();
      console.log(connectResult);

      console.log("querying summoner...");
      console.log("querying summoner:", summonerName);

      const summonerArray = await SummonerModel.find()
        .where("name")
        .equals(summonerName);
      if (summonerArray.length !== 0) {
        const summoner = summonerArray[0];
        const body = {
          name: summoner.name,
          profileIconId: summoner.profileIconId,
          summonerLevel: summoner.summonerLevel,
          queueType: summoner.queueType,
          tier: summoner.tier,
          rank: summoner.rank,
          leaguePoints: summoner.leaguePoints,
          wins: summoner.wins,
          losses: summoner.losses,
          updatedAt: summoner.updatedAt,
        };

        console.log(summonerArray);
        return res.status(200).send(body);
      }
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
    /* --------------------------------------------- */

    try {
      const response = await getSummonerByNameApi(summonerName as string);
      const { name, id, profileIconId, summonerLevel } = response.data;

      const leagueResponse = await getLeagueBySummonerIdApi(id);

      const rankedSolo = leagueResponse.data.find((league) => {
        league.queueType === "RANKED_SOLO_5x5";
      });

      const body = {
        name: name,
        profileIconId: profileIconId,
        summonerLevel: summonerLevel,
        queueType: rankedSolo?.queueType,
        tier: rankedSolo?.tier,
        rank: rankedSolo?.rank,
        leaguePoints: rankedSolo?.leaguePoints,
        wins: rankedSolo?.wins,
        losses: rankedSolo?.losses,
        updatedAt: new Date(),
      };

      await SummonerModel.create({
        name: name,
        profileIconId: profileIconId,
        summonerLevel: summonerLevel,
        queueType: rankedSolo?.queueType,
        tier: rankedSolo?.tier,
        rank: rankedSolo?.rank,
        leaguePoints: rankedSolo?.leaguePoints,
        wins: rankedSolo?.wins,
        losses: rankedSolo?.losses,
        updatedAt: new Date(),
      });

      return res.status(200).send(body);
    } catch (error: any) {
      if (error.response.status === 404) return res.status(404).end();
      return res.status(500).end();
    }
  }

  return res.status(404).end();
};

export default handler;
