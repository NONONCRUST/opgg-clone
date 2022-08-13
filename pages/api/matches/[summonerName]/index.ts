import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import MatchModel from "../../../../models/matchModel";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    try {
      const summonerName = req.query.summonerName;
      if (typeof summonerName !== "string") return res.status(400).end();

      const matchesArray = await MatchModel.find()
        .where("summonerName")
        .equals(summonerName);
      console.log(matchesArray);

      if (matchesArray.length === 0) res.status(200).send([]);

      const body = {
        summonerName: matchesArray[0].summonerName,
        matches: matchesArray[0].matches,
        updatedAt: matchesArray[0].updatedAt,
      };

      return res.status(200).send(body);
    } catch (error) {
      console.log(error);
      return res.status(200).send([]);
    }
  }

  return res.status(404).end();
};

export default handler;
