import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../lib/mongodb";
import SummonerModel from "../../../models/summonerModel";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectMongo();

  if (req.method === "GET") {
    try {
      const data = await SummonerModel.find().where("name", "노논맨");
      console.log(data);
      res.status(200).send(data);
    } catch (error) {
      console.log("error");
      res.status(500).end();
    }
  }

  if (req.method === "POST") {
    try {
      const result = await SummonerModel.create({
        name: "노논맨",
        profileIconId: 4903,
        summonerLevel: 70,
        queueType: "RANKED_SOLO_5x5",
        tier: "DIAMOND",
        rank: "II",
        leaguePoints: 75,
        wins: 67,
        losses: 41,
        updatedAt: "2022-08-09T19:35:13.924Z",
      });
      console.log(result);
      res.status(200).send(result);
    } catch (error) {
      console.log("error");
      res.status(500).end();
    }
  }

  res.status(404).end();
};

export default handler;
