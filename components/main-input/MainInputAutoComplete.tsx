import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@styles/theme';
import Divider from '@components/common/Divider';
import Typography from '@components/common/Typography';
import Flexbox from '@components/layouts/Flexbox';
import MainInputAutoCompleteItem from '@components/main-input/MainInputAutoCompleteItem';

interface ContainerProps {
  type: 'home' | 'header';
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 100%;

  width: 100%;
  background-color: white;

  @media screen and (min-width: ${theme.media.desktop}) {
    width: 32rem;
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    box-shadow: ${theme.elevation4};
    right: 4rem;

    ${({ type }) =>
      type === 'header' &&
      css`
        width: 18rem;
        right: 0;
        transform: translateY(0.2rem);
      `}
  }
`;

interface Props {
  type?: 'home' | 'header';
  summonersData: SummonerType[];
  searchKeyword: string;
}

const MainInputAutoComplete: React.FC<Props> = ({
  type = 'home',
  summonersData,
  searchKeyword,
}) => {
  return (
    <Container type={type}>
      <Flexbox justify="start" padding="0.5rem" width="100%">
        <Typography size={theme.fontSize.caption3} weight={600}>
          Summoner Profile
        </Typography>
      </Flexbox>
      <Divider />
      {summonersData &&
        summonersData.map((summoner, index) => (
          <MainInputAutoCompleteItem
            key={index}
            summonerData={summoner}
            searchKeyword={searchKeyword}
          />
        ))}
    </Container>
  );
};

export default MainInputAutoComplete;
