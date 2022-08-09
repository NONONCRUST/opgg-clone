import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import {
  getLeagueBySummonerIdApi,
  getSummonerByNameApi,
} from "../../../../lib/api/riotApi";
import fs from "fs";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    const summonerName = req.query.summonerName;
    console.log(summonerName);
    if (typeof summonerName !== "string") return res.status(400).end();

    const summonerListJSON = fs.readFileSync("data/summoners.json").toString();
    const summonerList = JSON.parse(summonerListJSON);

    const summonerInfo = summonerList.find(
      (summoner: GetSummonerByNameResponseType) =>
        summoner.name.toLowerCase() === summonerName.toLowerCase()
    );

    if (summonerInfo) {
      console.log("summoner found@@@");
      console.log(summonerInfo);
    }

    if (summonerInfo) return res.status(200).send(summonerInfo);

    try {
      const response = await getSummonerByNameApi(summonerName);
      const { name, id, profileIconId, summonerLevel } = response.data;

      const leagueResponse = await getLeagueBySummonerIdApi(id);

      const { queueType, tier, rank, leaguePoints, wins, losses } =
        leagueResponse.data[0];

      const body = {
        name: name,
        profileIconId: profileIconId,
        summonerLevel: summonerLevel,
        queueType: queueType,
        tier: tier,
        rank: rank,
        leaguePoints: leaguePoints,
        wins: wins,
        losses: losses,
      };

      fs.writeFileSync(
        "data/summoners.json",
        JSON.stringify([...summonerList, body])
      );

      return res.status(200).send(body);
    } catch (error) {
      return res.status(400).end();
    }
  }

  return res.status(404).end();
};

export default handler;
