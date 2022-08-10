import React from "react";
import palette from "../styles/palette";
import Card from "./common/Card";
import Typography from "./common/Typography";
import Flexbox from "./layouts/Flexbox";

interface Props {
  summonerName: string;
}

const IngameNotFound: React.FC<Props> = ({ summonerName }) => {
  return (
    <Card>
      <Flexbox flex="col" padding="2rem" gap="1rem">
        <Typography weight={600} size="1.25rem">
          {`'${summonerName}'`}님은 현재 게임 중이 아닙니다.
        </Typography>
        <Typography color={palette.gray[500]} size="0.875rem">
          현재 게임중이라면 다시 시도해주세요.
        </Typography>
        <Typography color={palette.gray[500]} size="0.875rem">
          (&apos;Bot&apos;은 RiotAPI에서 인게임 정보를 가져올 수 없습니다.)
        </Typography>
      </Flexbox>
    </Card>
  );
};

export default IngameNotFound;
