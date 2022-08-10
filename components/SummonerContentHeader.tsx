import styled from "@emotion/styled";
import React from "react";
import {
  getMinuteDiff,
  mapRank,
  parseDateAbsolute,
  parseDateRelative,
  throttle,
} from "../lib/utils";
import palette from "../styles/palette";
import Button from "./common/Button";
import LoadingButton from "./common/LoadingButton";
import Typography from "./common/Typography";
import FavoriteIconButton from "./FavoriteIconButton";
import Flexbox from "./layouts/Flexbox";
import Layout from "./layouts/Layout";
import SummonerIconAvatar from "./SummonerIconAvatar";
import TierHistoryChip from "./TierHistoryChip";

const Base = styled.div`
  .summoner-container {
    display: flex;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

interface Props {
  summonerData: GetSummonerByNameResponseType;
  isFetching: boolean;
  onClickFetchButton: () => void;
}

const SummonerContentHeader: React.FC<Props> = ({
  summonerData,
  isFetching,
  onClickFetchButton,
}) => {
  const minuteDiff = getMinuteDiff(new Date(summonerData.updatedAt));

  return (
    <Layout>
      <Base>
        <div className="summoner-container">
          <SummonerIconAvatar
            level={summonerData?.summonerLevel}
            iconNumber={4644}
          />
          <Flexbox flex="col" justify="start" items="start" gap="0.5rem">
            <Flexbox gap="0.25rem">
              <TierHistoryChip
                season="2022"
                tier={summonerData?.tier}
                rank={mapRank(summonerData?.rank)}
              />
            </Flexbox>
            <Flexbox gap="0.5rem">
              <Typography size="1.5rem" weight={600}>
                {summonerData?.name}
              </Typography>
              <FavoriteIconButton
                isFavorite={false}
                summonerName={summonerData?.name}
              />
            </Flexbox>
            <Typography size="0.75rem" color={palette.gray[500]}>
              래더 랭킹:{" "}
              <span style={{ color: palette.blue[500] }}>1,238 위</span> (상위
              0.0316%)
            </Typography>
            {!isFetching && (
              <Button
                onClick={throttle(onClickFetchButton)}
                disabled={minuteDiff < 5}
              >
                전적 갱신
              </Button>
            )}
            {isFetching && <LoadingButton width="84.34px" />}
            {summonerData && (
              <Typography size="0.75rem" color={palette.gray[400]}>
                최근 업데이트:{" "}
                {parseDateRelative(new Date(summonerData.updatedAt))}
              </Typography>
            )}
          </Flexbox>
        </div>
      </Base>
    </Layout>
  );
};

export default SummonerContentHeader;
