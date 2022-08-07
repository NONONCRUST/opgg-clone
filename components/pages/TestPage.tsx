import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  getCurrentGameBySummonerName,
  getFeaturedGame,
  getMatchesBySummonerName,
  getPlatformData,
  getRotation,
  getSummonerByName,
} from "../../lib/api/riot";
import Avatar from "../common/Avatar";
import Divider from "../common/Divider";
import DropdownButton from "../common/Dropdown/DropdownButton";
import DropdownMenu from "../common/Dropdown/DropdownMenu";
import DropdownMenuItem from "../common/Dropdown/DropdownMenuItem";
import Flexbox from "../layouts/Flexbox";

const TestPage: React.FC = () => {
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

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onClickDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <Flexbox justify="start" padding="1rem" gap="1rem">
      <DropdownButton open={dropdownOpen} onClick={onClickDropdown}>
        <DropdownMenu>
          <DropdownMenuItem label="메뉴" />
          <Divider />
          <DropdownMenuItem label="메뉴" />
          <Divider />
          <DropdownMenuItem label="메뉴" />
          <Divider />
          <DropdownMenuItem label="메뉴" />
        </DropdownMenu>
      </DropdownButton>
      <Avatar />
    </Flexbox>
  );
};

export default TestPage;
