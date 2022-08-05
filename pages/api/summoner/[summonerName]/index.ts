import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSummonerByNameApi } from "../../../../lib/api/riotApi";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const summonerName = req.query.summonerName;
    if (typeof summonerName !== "string") return res.status(400).end();

    try {
      const response = await getSummonerByNameApi(summonerName);
      res.status(200).send(response.data);
    } catch (error) {
      res.status(500).end();
    }
  }

  return res.status(404).end();
};

export default handler;
