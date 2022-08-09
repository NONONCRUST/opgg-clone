import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    try {
      const summonerName = req.query.summonerName;
      if (typeof summonerName !== "string") return res.status(400).end();

      const matchListBuffer = fs.readFileSync(
        `data/matches/${summonerName}.json`
      );

      const matchListJSON = matchListBuffer.toString();

      const matchList = JSON.parse(matchListJSON).filter(
        (match: any) => match.summonerName === summonerName
      );

      return res.status(200).send(matchList);
    } catch (error) {
      console.log(error);
      return res.status(200).send([]);
    }
  }

  return res.status(404).end();
};

export default handler;
