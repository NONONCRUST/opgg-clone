import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const championName = req.query.championName as string;

    if (!championName) return res.status(400).end();

    const version = req.query.version || "12.15";
    const championDataJSON = fs
      .readFileSync(`data/${version}/champion.json`)
      .toString();
    if (!championDataJSON) return res.status(400).send("no version found");

    const championData = JSON.parse(championDataJSON);

    const championObject = championData.data;

    const champion = championObject[championName];

    return res.status(200).send(champion);
  }
  return res.status(404).end();
};

export default handler;
