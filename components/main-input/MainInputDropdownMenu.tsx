import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useFavoriteSummoner from '@hooks/useFavoriteSummoner';
import useSearchHistory from '@hooks/useSearchHistory';
import { theme } from '@lib/styles/theme';
import EmptyNotification from '@components/main-input/EmptyNotification';
import MainInputDropdownMenuItem from '@components/main-input/MainInputDropdownMenuItem';
import MainInputDropdownTab from '@components/main-input/MainInputDropdownTab';

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
  overflow: hidden;

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
        border-radius: 0.25rem;
      `}
  }
`;

interface Props {
  type?: 'home' | 'header';
}

const MainInputDropdownMenu: React.FC<Props> = ({ type = 'home' }) => {
  const [currentTab, setCurrentTab] = useState<'recent' | 'favorite'>('recent');

  const { searchHistory } = useSearchHistory();
  const { favoriteSummoner } = useFavoriteSummoner();

  return (
    <Container type={type}>
      <MainInputDropdownTab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <ul style={{ width: '100%' }}>
        {currentTab === 'recent' &&
          searchHistory.map((name, index) => (
            <MainInputDropdownMenuItem
              key={index}
              name={name}
              isFavorite={favoriteSummoner.includes(name)}
              currentTab={currentTab}
            />
          ))}
        {currentTab === 'favorite' &&
          favoriteSummoner.map((name, index) => (
            <MainInputDropdownMenuItem
              key={index}
              name={name}
              isFavorite
              currentTab={currentTab}
            />
          ))}
        {currentTab === 'recent' && searchHistory.length === 0 && (
          <EmptyNotification type="recent" />
        )}
        {currentTab === 'favorite' && favoriteSummoner.length === 0 && (
          <EmptyNotification type="favorite" />
        )}
      </ul>
    </Container>
  );
};

export default MainInputDropdownMenu;
