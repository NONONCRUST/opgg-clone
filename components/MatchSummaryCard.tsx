import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "../store";
import palette from "../styles/palette";
import ChampionSearchInput from "./ChampionSearch/ChampionSearchInput";
import Avatar from "./common/Avatar";
import Card from "./common/Card";
import Divider from "./common/Divider";
import TabButton from "./common/TabButton";
import Typography from "./common/Typography";
import DonutChart from "./DonutChart";
import Flexbox from "./layouts/Flexbox";

const Container = styled.div`
  .match-summary-tab-area {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.875rem;
    padding: 0 0.5rem;
  }
`;

const MatchSummaryCard: React.FC = () => {
  const championSearchFilter = useSelector(
    (state) => state.search.championSearchFilter
  );

  return (
    <Container>
      <Card>
        <div className="match-summary-tab-area">
          <Flexbox gap="0.2rem">
            <TabButton width="4.5rem" height="1.75rem" active={true}>
              솔로랭크
            </TabButton>
          </Flexbox>
          <Flexbox gap="0.5rem">
            {championSearchFilter && (
              <Avatar
                size="24px"
                src={`/champion/${championSearchFilter}.png`}
              />
            )}
            <ChampionSearchInput />
          </Flexbox>
        </div>
        <Divider />
        <Flexbox justify="start" padding="1rem">
          <Flexbox flex="col" gap="0.5rem">
            <Typography color={palette.gray[500]} size="0.75rem">
              10전 5승 5패
            </Typography>
            <DonutChart percentage={50} />
          </Flexbox>
        </Flexbox>
      </Card>
    </Container>
  );
};

export default MatchSummaryCard;
