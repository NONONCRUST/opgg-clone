import styled from "@emotion/styled";
import React from "react";
import { capitalize, mapRank } from "../../lib/utils";
import { gray, red } from "../../styles/palette";
import { theme } from "../../styles/theme";
import Avatar from "../common/Avatar";
import Typography from "../common/Typography";
import HighlightedText from "../HighlightedText";
import Flexbox from "../layouts/Flexbox";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  width: 100%;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  color: ${gray[500]};

  cursor: pointer;

  &:hover {
    background-color: ${gray[100]};
  }
`;

interface Props {
  summonerData: SummonerType;
  searchKeyword: string;
}

const MainInputAutoCompleteItem: React.FC<Props> = ({
  summonerData,
  searchKeyword,
}) => {
  return (
    <Container>
      <Avatar size="36px" src="/profile-icon/4644.png" />
      <Flexbox flex="col" items="start" gap="0.3rem">
        <HighlightedText string={summonerData.name} keyword={searchKeyword} />
        {summonerData.tier && (
          <Typography size="11px">
            {capitalize(summonerData.tier)} {mapRank(summonerData.rank)} -{" "}
            {summonerData.leaguePoints}LP
          </Typography>
        )}
        {!summonerData.tier && (
          <Typography size="11px">
            Level {summonerData.summonerLevel}
          </Typography>
        )}
      </Flexbox>
    </Container>
  );
};

export default MainInputAutoCompleteItem;
