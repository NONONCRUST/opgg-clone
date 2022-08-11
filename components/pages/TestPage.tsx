import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getCurrentGameBySummonerName } from "../../lib/api/riot";
import palette from "../../styles/palette";
import Avatar from "../common/Avatar";
import Button from "../common/Button";
import Divider from "../common/Divider";
import DropdownButton from "../common/Dropdown/DropdownButton";
import DropdownMenu from "../common/Dropdown/DropdownMenu";
import DropdownMenuItem from "../common/Dropdown/DropdownMenuItem";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";
import RankEmblemAvatar from "../RankEmblemAvatar";
import SummonerIconAvatar from "../SummonerIconAvatar";

const TestPage: React.FC = () => {
  // const { data: rotationData } = useQuery(["rotation"], getRotation);

  // const { data: summonerData } = useQuery(["summoner"], () =>
  //   getSummonerByName("골없칸왕")
  // );

  // const { data: featuredGameData } = useQuery(
  //   ["featured-game"],
  //   getFeaturedGame
  // );

  const { data: currentGameData } = useQuery(["current-game"], () =>
    getCurrentGameBySummonerName("루야 Ruya")
  );

  // const { data: platformData } = useQuery(["platform"], getPlatformData);

  // const { data: matchesData } = useQuery(["matches"], () =>
  // getMatchesBySummonerName("골없칸왕")
  // );

  // console.log("------------------rotation--------------------");
  // console.log(rotationData);
  // console.log("------------------골없칸왕의 정보--------------------");
  // console.log(summonerData);
  // console.log("------------------featured game--------------------");
  // console.log(featuredGameData);
  console.log("-------------루야의 현재 게임---------------");
  console.log(currentGameData);
  // console.log("-------------플랫폼 정보---------------");
  // console.log(platformData);
  // console.log("------------ 골없칸왕의 최근 20게임 전적 ---------");
  // console.log(matchesData);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onClickDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <Flexbox justify="start" items="start" flex="col">
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
      <Flexbox justify="start" padding="1rem" gap="1rem">
        <Typography size="2rem">타이포그래피입니다.</Typography>
      </Flexbox>
      <Flexbox justify="start" padding="1rem" gap="1rem">
        <Typography color={palette.gray[500]}>타이포그래피입니다.</Typography>
      </Flexbox>
      <Flexbox justify="start" padding="1rem" gap="1rem">
        <Typography weight={700}>타이포그래피입니다.</Typography>
      </Flexbox>
      <Flexbox justify="start" padding="1rem" gap="1rem">
        <SummonerIconAvatar level={123} iconNumber={4644} />
        <RankEmblemAvatar tier="diamond" />
        <Button>버튼</Button>
      </Flexbox>
    </Flexbox>
  );
};

export default TestPage;
