import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import Avatar from "../common/Avatar";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";
import MatchResultChampionAvatar from "./MatchResultChampionAvatar";

interface ContainerProps {
  result: "win" | "lose";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  gap: 0.2rem;

  .champion-area {
    display: flex;
    gap: 0.2rem;
  }

  .rune-avatar {
    background-color: black;
  }

  .item-avatar {
    background-color: ${({ result }) =>
      result === "win" ? palette.blue[200] : palette.red[200]};
  }

  .kda-area {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    padding: 0 1rem;
    margin-right: 1rem;
  }

  .death-text {
    color: ${palette.red[500]};
  }

  .text-divider {
    font-weight: 400;
    color: ${palette.gray[400]};
  }

  .stats-area {
    display: none;
    flex-direction: column;
    gap: 0.2rem;

    margin-right: 2rem;
    padding: 0 0.5rem;
    border-left: 1px solid
      ${({ result }) =>
        result === "win" ? palette.blue[100] : palette.red[100]};
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .stats-area {
      display: flex;
    }
  }
`;

interface Props {
  result: "win" | "lose";
}

const MatchResultInfo: React.FC<Props> = ({ result }) => {
  return (
    <Container result={result}>
      <Flexbox>
        <div className="champion-area">
          <MatchResultChampionAvatar champion="Lulu" level={12} />
          <Flexbox flex="col" gap="0.2rem">
            <Avatar
              size="22px"
              src="/summoner-spell/ignite.jpeg"
              shape="boxier"
              alt="summoner spell"
            />
            <Avatar
              size="22px"
              src="/summoner-spell/flash.jpeg"
              shape="boxier"
              alt="summoner spell"
            />
          </Flexbox>
          <Flexbox flex="col" gap="0.2rem">
            <Avatar
              className="rune-avatar"
              size="22px"
              src="/rune/8214.webp"
              alt="summoner rune"
            />
            <Avatar
              size="22px"
              src="/rune/8300.webp"
              shape="boxier"
              alt="summoner rune"
            />
          </Flexbox>
        </div>
        <div className="kda-area">
          <Typography weight={600}>
            0 <span className="text-divider">/</span>{" "}
            <span className="death-text">0</span>{" "}
            <span className="text-divider">/</span> 18
          </Typography>
          <Typography size="12px" color={palette.gray[500]}>
            6.00:1 평점
          </Typography>
        </div>
        <div className="stats-area">
          <Typography size="11px" color={palette.red[500]}>
            킬관여 60%
          </Typography>
          <Typography size="11px" color={palette.gray[500]}>
            제어와드 3
          </Typography>
          <Typography size="11px" color={palette.gray[500]}>
            CS 28 (1.6)
          </Typography>
          <Typography size="11px" color={palette.gray[500]} weight={600}>
            Master
          </Typography>
        </div>
      </Flexbox>
      <Flexbox gap="0.15rem" justify="start">
        <Avatar
          className="item-avatar"
          size="22px"
          shape="boxier"
          alt="summoner rune"
        />
        <Avatar
          className="item-avatar"
          size="22px"
          shape="boxier"
          alt="summoner rune"
        />
        <Avatar
          className="item-avatar"
          size="22px"
          shape="boxier"
          alt="summoner rune"
        />
        <Avatar
          className="item-avatar"
          size="22px"
          shape="boxier"
          alt="summoner rune"
        />
        <Avatar
          className="item-avatar"
          size="22px"
          shape="boxier"
          alt="summoner rune"
        />
        <Avatar
          className="item-avatar"
          size="22px"
          shape="boxier"
          alt="summoner rune"
        />
        <Avatar
          className="rune-avatar"
          size="22px"
          src="/rune/8214.webp"
          alt="summoner rune"
        />
      </Flexbox>
    </Container>
  );
};

export default MatchResultInfo;
