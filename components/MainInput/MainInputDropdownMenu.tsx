import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { theme } from "../../styles/theme";
import MainInputDropdownMenuItem from "./MainInputDropdownMenuItem";
import MainInputDropdownTab from "./MainInputDropdownTab";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 24rem;
  border-bottom-left-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  background-color: white;
  box-shadow: ${theme.elevation4};

  position: absolute;
  top: 100%;
  right: 4rem;
`;

const MainInputDropdownMenu: React.FC = () => {
  const [searchHistoryList, setSearchHistoryList] = useState<string[]>([]);

  useEffect(() => {
    const localSearchHistoryList = localStorage.getItem("search");
    if (localSearchHistoryList) {
      setSearchHistoryList(localSearchHistoryList.split(";"));
    }
  }, []);

  return (
    <Container>
      <MainInputDropdownTab currentTab={"recent"} />

      <ul style={{ width: "100%" }}>
        {searchHistoryList.map(() => (
          <MainInputDropdownMenuItem name="asd" />
        ))}
        <MainInputDropdownMenuItem name="asd" />
      </ul>
    </Container>
  );
};

export default MainInputDropdownMenu;
