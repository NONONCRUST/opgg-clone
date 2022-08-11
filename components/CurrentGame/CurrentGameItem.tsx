import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import Avatar from "../common/Avatar";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";

interface ContainerProps {
  team: "blue" | "red";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  border-left: 4px solid
    ${({ team }) => (team === "blue" ? theme.primary : palette.red[500])};

  gap: 0.1rem;
  padding: 0.5rem 13px;
`;

interface Props {
  participant: CurrentGameParticipantType;
  team: "blue" | "red";
}

const CurrentGameItem: React.FC<Props> = ({ participant, team }) => {
  return (
    <Container team={team}>
      <Avatar src="/champion/Lulu.png" />
      <Flexbox flex="col" gap="3px">
        <Avatar
          src={`/summoner-spell/${participant.spell1Id}.jpeg`}
          shape="boxier"
          size="15px"
        />
        <Avatar
          src={`/summoner-spell/${participant.spell2Id}.jpeg`}
          shape="boxier"
          size="15px"
        />
      </Flexbox>
      <Flexbox flex="col" gap="3px">
        <Avatar
          src={`/rune/${participant.perks.perkIds[0]}.webp`}
          style={{ background: "black" }}
          size="15px"
        />
        <Avatar
          size="15px"
          src={`/rune/${participant.perks.perkSubStyle}.webp`}
        />
      </Flexbox>
      <Flexbox padding="0 1rem">
        <Typography weight={600} size="0.875rem">
          {participant.summonerName}
        </Typography>
      </Flexbox>
    </Container>
  );
};

export default CurrentGameItem;
