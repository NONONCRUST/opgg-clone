import React from "react";
import styled from "@emotion/styled";
import palette from "../styles/palette";
import Card from "./common/Card";
import Divider from "./common/Divider";
import Typography from "./common/Typography";
import Flexbox from "./layouts/Flexbox";
import RankEmblemAvatar from "./RankEmblemAvatar";
import { theme } from "../styles/theme";

const Container = styled.section`
  width: 100%;

  .solo-rank-info-card {
    width: 100%;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .solo-rank-info-card {
      width: 20rem;
    }
  }
`;

const SoloRankInfoCard: React.FC = () => {
  return (
    <Container>
      <Card className="solo-rank-info-card">
        <Flexbox padding="1rem" justify="start">
          <Typography size="0.875rem">솔로랭크</Typography>
        </Flexbox>
        <Divider />
        <Flexbox padding="1rem" justify="between">
          <Flexbox gap="1rem">
            <RankEmblemAvatar tier="master" />
            <Flexbox flex="col" items="start" gap="0.5rem">
              <Typography size="1.25rem" weight={700}>
                Master
              </Typography>
              <Typography size="0.75rem" color={palette.gray[500]}>
                364 LP
              </Typography>
            </Flexbox>
          </Flexbox>
          <Flexbox flex="col" gap="0.5rem" items="end">
            <Typography size="0.75rem" color={palette.gray[400]}>
              365승 324패
            </Typography>
            <Typography size="0.75rem" color={palette.gray[400]}>
              승률 54%
            </Typography>
          </Flexbox>
        </Flexbox>
      </Card>
    </Container>
  );
};

export default SoloRankInfoCard;
