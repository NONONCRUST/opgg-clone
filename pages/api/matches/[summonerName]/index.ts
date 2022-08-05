import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import {
  getMatchByMatchId,
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
        const response = await getMatchByMatchId(matchId);
        console.log("index", index);
        if (index === 0) console.log(response.data);
        return response.data;
      });

      const matches = await Promise.all(matchesPromise);

      res.status(200).send(matches);
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  }

  return res.status(404).end();
};

export default handler;
