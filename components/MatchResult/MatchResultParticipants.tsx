import React from "react";
import styled from "@emotion/styled";
import Flexbox from "../layouts/Flexbox";
import Avatar from "../common/Avatar";
import Typography from "../common/Typography";
import palette from "../../styles/palette";
import { FAKE_PARTICIPANTS_TEAM } from "../../lib/FakeData";
import { shortenText } from "../../lib/utils";
import { theme } from "../../styles/theme";

const Container = styled.div`
  display: none;
  gap: 1rem;

  .participant-name {
    cursor: pointer;
    font-size: 0.75rem;
    color: ${palette.gray[500]};
    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    display: flex;
  }
`;

interface Props {
  matchData: MatchType;
}

const MatchResultParticipants: React.FC<Props> = ({ matchData }) => {
  return (
    <Container>
      <Flexbox flex="col" gap="0.15rem" items="start">
        {FAKE_PARTICIPANTS_TEAM.map((participant, index) => (
          <Flexbox key={index} gap="0.2rem">
            <Avatar
              size="1rem"
              shape="boxier"
              src={`/champion/${participant.champion}.png`}
              alt="partipant-champion"
            />
            <Typography className="participant-name">
              {shortenText(participant.name, 5)}
            </Typography>
          </Flexbox>
        ))}
      </Flexbox>
      <Flexbox flex="col" gap="0.15rem" items="start">
        {FAKE_PARTICIPANTS_TEAM.map((participant, index) => (
          <Flexbox key={index} gap="0.2rem">
            <Avatar
              size="1rem"
              shape="boxier"
              src={`/champion/${participant.champion}.png`}
              alt="partipant-champion"
            />
            <Typography className="participant-name">
              {shortenText(participant.name, 5)}
            </Typography>
          </Flexbox>
        ))}
      </Flexbox>
    </Container>
  );
};

export default MatchResultParticipants;
