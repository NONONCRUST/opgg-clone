import styled from "@emotion/styled";
import React from "react";
import ChampionSearchInput from "./ChampionSearch/ChampionSearchInput";
import Card from "./common/Card";
import Divider from "./common/Divider";
import TabButton from "./common/TabButton";
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
  return (
    <Container>
      <Card height="14rem">
        <div className="match-summary-tab-area">
          <Flexbox gap="0.2rem">
            <TabButton width="3rem" height="1.75rem" active={true}>
              전체
            </TabButton>
            <TabButton width="4.5rem" height="1.75rem" active={false}>
              솔로랭크
            </TabButton>
            <TabButton width="4.5rem" height="1.75rem" active={false}>
              자유랭크
            </TabButton>
          </Flexbox>
          <ChampionSearchInput />
        </div>

        <Divider />
      </Card>
    </Container>
  );
};

export default MatchSummaryCard;
