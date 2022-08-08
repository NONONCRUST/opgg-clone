import styled from "@emotion/styled";
import React, { useState } from "react";
import palette from "../../styles/palette";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface TabProps {
  active: boolean;
}

const Tab = styled.div<TabProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  padding: 0.5rem;

  cursor: pointer;
  color: ${palette.gray[500]};
  font-size: 0.875rem;

  background-color: ${({ active }) => (active ? "white" : palette.gray[200])};
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
