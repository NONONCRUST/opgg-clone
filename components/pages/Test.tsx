import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import {
  getCurrentGameBySummonerName,
  getFeaturedGame,
  getMatchesBySummonerName,
  getPlatformData,
  getRotation,
  getSummonerByName,
} from "../../lib/api/riot";
import Flexbox from "../layouts/Flexbox";

const Test: React.FC = () => {
  // const { data: rotationData } = useQuery(["rotation"], getRotation);

  // const { data: summonerData } = useQuery(["summoner"], () =>
  //   getSummonerByName("골없칸왕")
  // );

  // const { data: featuredGameData } = useQuery(
  //   ["featured-game"],
  //   getFeaturedGame
  // );

  // const { data: currentGameData } = useQuery(["current-game"], () =>
  //   getCurrentGameBySummonerName("골없칸왕")
  // );

  // const { data: platformData } = useQuery(["platform"], getPlatformData);

  // const { data: matchesData } = useQuery(["matches"], () =>
  // getMatchesBySummonerName("골없칸왕")
  // );

  const fetchMatchesData = async () => {
    try {
      const response = await getMatchesBySummonerName("골없칸왕");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("------------------rotation--------------------");
  // console.log(rotationData);
  // console.log("------------------골없칸왕의 정보--------------------");
  // console.log(summonerData);
  // console.log("------------------featured game--------------------");
  // console.log(featuredGameData);
  // console.log("-------------골없칸왕의 현재 게임---------------");
  // console.log(currentGameData);
  // console.log("-------------플랫폼 정보---------------");
  // console.log(platformData);
  // console.log("------------ 골없칸왕의 최근 20게임 전적 ---------");
  // console.log(matchesData);

  return (
    <Flexbox flex="col">
      <button onClick={fetchMatchesData}>골없칸왕의 매치 정보 불러오기</button>
    </Flexbox>
  );
};

export default Test;
