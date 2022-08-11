import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import Avatar from "../common/Avatar";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 0.1rem;
  color: ${palette.gray[500]};

  .match-detail-summoner-name {
    margin-left: 0.5rem;
    width: 6rem;
  }

  .match-detail-kda {
    width: 6rem;
  }

  .match-detail-damage-dealt {
    width: 4rem;
  }

  .match-detail-ward {
    display: none;
    width: 3rem;
  }

  .match-detail-cs {
    display: none;
    width: 5rem;
  }

  .match-detail-items {
    display: none;
    margin-left: 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .match-detail-ward {
      display: flex;
    }

    .match-detail-cs {
      display: flex;
    }

    .match-detail-items {
      display: flex;
    }
  }
`;

const MatchResultDetailItem: React.FC = () => {
  return (
    <Container>
      <Avatar />
      <Flexbox flex="col" gap="0.1rem">
        <Avatar shape="boxier" size="16px" />
        <Avatar shape="boxier" size="16px" />
      </Flexbox>
      <Flexbox flex="col" gap="0.1rem">
        <Avatar size="16px" />
        <Avatar size="16px" />
      </Flexbox>
      <Typography className="match-detail-summoner-name">
        골없칸왕느느
      </Typography>
      <Flexbox className="match-detail-kda" flex="col">
        <Typography size="0.75rem">64/31/14(64%)</Typography>
        <Typography size="0.75rem" weight={600}>
          18.33:1
        </Typography>
      </Flexbox>
      <Flexbox className="match-detail-damage-dealt" flex="col">
        <Typography size="0.75rem">34,671</Typography>
        <Typography size="0.75rem">34,671</Typography>
      </Flexbox>
      <Flexbox className="match-detail-ward" flex="col">
        <Typography size="0.75rem">6</Typography>
        <Typography size="0.75rem">7 / 3</Typography>
      </Flexbox>
      <Flexbox className="match-detail-cs" flex="col">
        <Typography size="0.75rem">151</Typography>
        <Typography size="0.75rem">분당 51.6</Typography>
      </Flexbox>
      <Flexbox className="match-detail-items" gap="0.1rem">
        <Avatar size="22px" shape="boxier" />
        <Avatar size="22px" shape="boxier" />
        <Avatar size="22px" shape="boxier" />
        <Avatar size="22px" shape="boxier" />
        <Avatar size="22px" shape="boxier" />
        <Avatar size="22px" shape="boxier" />
        <Avatar size="22px" shape="boxier" />
      </Flexbox>
    </Container>
  );
};

export default MatchResultDetailItem;
