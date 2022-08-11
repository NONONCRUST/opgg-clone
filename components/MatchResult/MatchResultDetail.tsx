import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import Card from "../common/Card";
import Divider from "../common/Divider";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";
import MatchResultDetailItem from "./MatchResultDetailItem";

const Container = styled.div`
  margin-top: 0.2rem;

  .match-result-meta {
    padding: 0.5rem 1rem;
    justify-content: flex-start;
    color: ${palette.gray[400]};
    font-size: 0.75rem;
  }

  .team-meta {
  }

  .kda-meta {
    margin-left: 10rem;
  }

  .damage-dealt-meta {
    margin-left: 3rem;
  }

  .ward-meta {
    display: none;
    margin-left: 2rem;
  }

  .cs-meta {
    display: none;
    margin-left: 3rem;
  }

  .item-meta {
    display: none;
    margin-left: 7rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .ward-meta {
      display: flex;
    }

    .cs-meta {
      display: flex;
    }

    .item-meta {
      display: flex;
    }
  }
`;

interface Props {
  matchData: MatchType;
  team: "blue" | "red";
}

const MatchResultDetail: React.FC<Props> = ({ matchData, team }) => {
  return (
    <Container>
      <Card>
        <Flexbox className="match-result-meta">
          <Typography color={theme.primary}>승리</Typography>
          <span className="team-meta">(블루팀)</span>
          <Typography className="kda-meta">KDA</Typography>
          <Typography className="damage-dealt-meta">피해량</Typography>
          <Typography className="ward-meta">와드</Typography>
          <Typography className="cs-meta">CS</Typography>
          <Typography className="item-meta">아이템</Typography>
        </Flexbox>
        <Divider />
        <MatchResultDetailItem />
        <MatchResultDetailItem />
        <MatchResultDetailItem />
        <MatchResultDetailItem />
        <MatchResultDetailItem />
      </Card>
    </Container>
  );
};

export default MatchResultDetail;
