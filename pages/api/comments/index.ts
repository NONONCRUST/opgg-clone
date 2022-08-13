import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import commentModel from "../../../models/commentModel";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const championName = req.query.champion;

    const commentArray = await commentModel
      .find()
      .where("champion")
      .equals(championName);

    console.log(commentArray);

    return res.status(200).send(commentArray);
  }

  if (req.method === "POST") {
    const { name, champion, version, contents } = req.body;

    try {
      await commentModel.create({
        name: name,
        champion: champion,
        version: version,
        contents: contents,
        createdAt: new Date(),
      });

      return res.status(201).end();
    } catch (error) {
      return res.status(500).end();
    }
  }

  return res.status(404).end();
};

export default handler;
