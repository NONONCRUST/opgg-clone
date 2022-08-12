import React from "react";
import styled from "@emotion/styled";
import {
  getMinuteDiff,
  mapRank,
  parseDateRelative,
  throttle,
} from "../lib/utils";

import Button from "./common/Button";
import LoadingButton from "./common/LoadingButton";
import Typography from "./common/Typography";
import FavoriteIconButton from "./FavoriteIconButton";
import Flexbox from "./layouts/Flexbox";
import Layout from "./layouts/Layout";
import SummonerIconAvatar from "./SummonerIconAvatar";
import TierHistoryChip from "./TierHistoryChip";
import { theme } from "../styles/theme";
import { gray } from "../styles/palette";

const Base = styled.div`
  .summoner-container {
    display: flex;
    padding: 1rem;
    gap: 1.5rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .summoner-container {
      padding: 3rem 0;
    }
  }
`;

interface Props {
  summonerData: GetSummonerByNameResponseType;
  isFetching: boolean;
  updatedAt?: Date;
  onClickFetchButton: () => void;
}

const SummonerContentHeader: React.FC<Props> = ({
  summonerData,
  isFetching,
  updatedAt,
  onClickFetchButton,
}) => {
  const minuteDiff = getMinuteDiff(summonerData.updatedAt);

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
            {!isFetching && (
              <Button
                onClick={throttle(onClickFetchButton)}
                disabled={minuteDiff < 5 && updatedAt !== undefined}
              >
                전적 갱신
              </Button>
            )}
            {isFetching && <LoadingButton width="84.34px" />}
            {summonerData && (
              <Typography size="0.75rem" color={gray[400]}>
                {updatedAt
                  ? `최근 업데이트: ${parseDateRelative(updatedAt)}`
                  : "전적 갱신 버튼을 눌러 전적을 갱신해주세요."}
              </Typography>
            )}
          </Flexbox>
        </div>
      </Base>
    </Layout>
  );
};

export default SummonerContentHeader;
