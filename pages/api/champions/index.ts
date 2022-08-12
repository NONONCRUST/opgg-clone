import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    try {
      const version = req.query.version || "12.15";
      console.log(version);
      const championDataJSON = fs
        .readFileSync(`data/${version}/champion.json`)
        .toString();
      if (!championDataJSON) return res.status(400).send("no version found");

      const championData = JSON.parse(championDataJSON);

      const championObject = championData.data;

      const championList = Object.keys(championObject).map(
        (key) => championObject[key]
      );

      console.log(championList);
      return res.status(200).send(championList);
    } catch (error) {
      return res.status(500).end();
    }
  }
  return res.status(404).end();
};

export default handler;
