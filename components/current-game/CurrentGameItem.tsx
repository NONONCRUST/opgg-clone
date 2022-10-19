import React from 'react';
import styled from '@emotion/styled';
import { championObject } from '@lib/staticData';
import { gray, red } from '@styles/palette';
import { theme } from '@styles/theme';
import Avatar from '@components/common/Avatar';
import Divider from '@components/common/Divider';
import Typography from '@components/common/Typography';
import Flexbox from '@components/layouts/Flexbox';

interface ContainerProps {
  team: 'blue' | 'red';
}

const Container = styled.div<ContainerProps>`
  display: flex;
  width: 100%;
  border-left: 4px solid
    ${({ team }) => (team === 'blue' ? theme.primary : red[500])};

  gap: 0.1rem;
  padding: 0.5rem 13px;
`;

interface Props {
  participant: CurrentGameParticipantType;
  team: 'blue' | 'red';
}

const CurrentGameItem: React.FC<Props> = ({ participant, team }) => {
  const id = participant.championId.toString();
  const champion = championObject[id];

  return (
    <>
      <Container team={team}>
        <Avatar src={`/champion/${champion?.eng}.png`} />
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
            style={{ background: 'black' }}
            size="15px"
          />
          <Avatar
            size="15px"
            src={`/rune/${participant.perks.perkSubStyle}.webp`}
          />
        </Flexbox>
        <Flexbox padding="0 1rem">
          <Typography weight={600} size="0.875rem" color={gray[700]}>
            {participant.summonerName}
          </Typography>
        </Flexbox>
      </Container>
      <Divider />
    </>
  );
};

export default CurrentGameItem;
