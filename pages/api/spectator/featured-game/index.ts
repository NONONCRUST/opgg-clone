import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getFeaturedGameApi } from "../../../../lib/api/riotApi";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    try {
      const response = await getFeaturedGameApi();
      res.status(200).send(response.data);
    } catch (error) {
      res.status(500).end();
    }
  }

  return res.status(404).end();
};

export default handler;
