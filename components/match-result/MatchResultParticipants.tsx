import React from "react";
import styled from "@emotion/styled";
import Flexbox from "@components/layouts/Flexbox";
import Avatar from "@components/common/Avatar";
import Typography from "@components/common/Typography";
import { shortenText } from "@lib/utils";
import { theme } from "@styles/theme";
import Link from "next/link";
import { gray } from "@styles/palette";

const Container = styled.div`
  display: none;
  gap: 1rem;

  .participant-name {
    cursor: pointer;
    font-size: 0.75rem;
    color: ${gray[500]};
    &:hover {
      text-decoration: underline;
    }
  }

  .participants-col {
    width: 5.5rem;
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
      <Flexbox
        className="participants-col "
        flex="col"
        gap="0.15rem"
        items="start"
      >
        {matchData.participants.slice(0, 5).map((participant, index) => (
          <Flexbox key={index} gap="0.2rem">
            <Avatar
              size="16px"
              shape="boxier"
              src={`/champion/${participant.championName}.png`}
              alt="partipant-champion"
            />
            <Typography className="participant-name">
              <Link href={`/summoners/${participant.summonerName}`}>
                <a>{shortenText(participant.summonerName, 5)}</a>
              </Link>
            </Typography>
          </Flexbox>
        ))}
      </Flexbox>
      <Flexbox
        className="participants-col"
        flex="col"
        gap="0.15rem"
        items="start"
      >
        {matchData.participants.slice(5, 10).map((participant, index) => (
          <Flexbox key={index} gap="0.2rem">
            <Avatar
              size="16px"
              shape="boxier"
              src={`/champion/${participant.championName}.png`}
              alt="partipant-champion"
            />
            <Typography className="participant-name">
              <Link href={`/summoners/${participant.summonerName}`}>
                <a>{shortenText(participant.summonerName, 5)}</a>
              </Link>
            </Typography>
          </Flexbox>
        ))}
      </Flexbox>
    </Container>
  );
};

export default MatchResultParticipants;
