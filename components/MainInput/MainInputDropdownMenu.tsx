import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import useFavoriteSummoner from "../../hooks/useFavoriteSummoner";
import useSearchHistory from "../../hooks/useSearchHistory";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import EmptyNotification from "./EmptyNotification";
import MainInputDropdownMenuItem from "./MainInputDropdownMenuItem";
import MainInputDropdownTab from "./MainInputDropdownTab";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 32rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background-color: white;
  box-shadow: ${theme.elevation4};

  position: absolute;
  top: 100%;
  right: 4rem;

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: ${palette.gray[700]};
    `}
`;

const MainInputDropdownMenu: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<"recent" | "favorite">("recent");

  const { searchHistory } = useSearchHistory();
  const { favoriteSummoner } = useFavoriteSummoner();

  return (
    <Container>
      <MainInputDropdownTab
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />

      <ul style={{ width: "100%" }}>
        {currentTab === "recent" &&
          searchHistory.map((name, index) => (
            <MainInputDropdownMenuItem
              key={index}
              name={name}
              isFavorite={favoriteSummoner.includes(name)}
              currentTab={currentTab}
            />
          ))}
        {currentTab === "favorite" &&
          favoriteSummoner.map((name, index) => (
            <MainInputDropdownMenuItem
              key={index}
              name={name}
              isFavorite
              currentTab={currentTab}
            />
          ))}
        {currentTab === "recent" && searchHistory.length === 0 && (
          <EmptyNotification type="recent" />
        )}
        {currentTab === "favorite" && favoriteSummoner.length === 0 && (
          <EmptyNotification type="favorite" />
        )}
      </ul>
    </Container>
  );
};

export default MainInputDropdownMenu;
