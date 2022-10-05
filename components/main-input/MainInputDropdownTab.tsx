import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { gray } from "@styles/palette";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

interface TabProps {
  active: boolean;
}

const Tab = styled.button<TabProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  padding: 0.5rem;
  flex: 1;

  outline: none;
  border: none;
  cursor: pointer;
  color: ${gray[500]};
  font-size: 0.875rem;

  background-color: ${({ active }) => (active ? "white" : gray[200])};

  ${({ theme, active }) =>
    theme.mode === "dark" &&
    active &&
    css`
      background-color: ${gray[700]};
    `}

  ${({ theme, active }) =>
    theme.mode === "dark" &&
    !active &&
    css`
      background-color: ${gray[800]};
    `}
`;

interface Props {
  currentTab: "recent" | "favorite";
  setCurrentTab: React.Dispatch<React.SetStateAction<"recent" | "favorite">>;
}

const MainInputDropdownTab: React.FC<Props> = ({
  currentTab,
  setCurrentTab,
}) => {
  return (
    <Container>
      <Tab
        active={currentTab === "recent"}
        onClick={() => setCurrentTab("recent")}
      >
        최근검색
      </Tab>
      <Tab
        active={currentTab === "favorite"}
        onClick={() => setCurrentTab("favorite")}
      >
        즐겨찾기
      </Tab>
    </Container>
  );
};

export default MainInputDropdownTab;
