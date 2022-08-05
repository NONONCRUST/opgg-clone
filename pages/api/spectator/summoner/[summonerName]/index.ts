import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import {
  getCurrentGameBySummonerNameApi,
  getSummonerByNameApi,
} from "../../../../../lib/api/riotApi";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const summonerName = req.query.summonerName;
    if (typeof summonerName !== "string") return res.status(400).end();

    try {
      const {
        data: { id },
      } = await getSummonerByNameApi(summonerName);
      const response = await getCurrentGameBySummonerNameApi(id);
      return res.status(200).send(response.data);
    } catch (error: any) {
      if (error.response.status === 404) {
        return res.status(200).send("idle");
      }
      return res.status(500).end();
    }
  }

  return res.status(404).end();
};

export default handler;