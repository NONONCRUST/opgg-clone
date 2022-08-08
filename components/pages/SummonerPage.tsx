import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import palette from "../../styles/palette";
import Button from "../common/Button";
import Card from "../common/Card";
import Divider from "../common/Divider";
import Typography from "../common/Typography";
import FavoriteIconButton from "../FavoriteIconButton";
import Flexbox from "../layouts/Flexbox";
import SummonerIconAvatar from "../SummonerIconAvatar";
import TierHistoryChip from "../TierHistoryChip";

const Base = styled.main`
  .content-area {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
    background-color: ${palette.gray[100]};
  }
`;

const SummonerPage: React.FC = () => {
  const summonerName = useRouter().query.name;

  return (
    <Base>
      <Flexbox padding="1rem" justify="start" items="start" gap="1.5rem">
        <SummonerIconAvatar level={123} iconNumber={4644} />
        <Flexbox flex="col" justify="start" items="start" gap="0.5rem">
          <Flexbox gap="0.25rem">
            <TierHistoryChip season="2022" tier="master" />
            <TierHistoryChip season="2021" tier="master" />
            <TierHistoryChip season="2020" tier="master" />
          </Flexbox>
          <Flexbox gap="0.5rem">
            <Typography size="1.5rem" weight={600}>
              {summonerName}
            </Typography>
            <FavoriteIconButton isFavorite={false} />
          </Flexbox>
          <Typography size="0.75rem" color={palette.gray[500]}>
            래더 랭킹:{" "}
            <span style={{ color: palette.blue[500] }}>1,238 위</span> (상위
            0.0316%)
          </Typography>
          <Button>전적 갱신</Button>
          <Typography size="0.75rem" color={palette.gray[400]}>
            최근 업데이트: 23분 전
          </Typography>
        </Flexbox>
      </Flexbox>
      <Divider />
      <div className="content-area">
        <Card height="8rem"></Card>
      </div>
    </Base>
  );
};

export default SummonerPage;
