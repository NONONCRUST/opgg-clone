import React from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import TabButton from "./common/TabButton";
import Flexbox from "./layouts/Flexbox";
import Layout from "./layouts/Layout";

const Container = styled.div`
  padding: 0 1rem;

  @media screen and (min-width: ${theme.media.desktop}) {
    padding: 0;
  }
`;

interface Props {
  activeTab: "general" | "ingame";
  setActiveTab: React.Dispatch<React.SetStateAction<"general" | "ingame">>;
}

const SummonerContentTab: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  return (
    <Layout>
      <Container>
        <Flexbox padding="0.2rem 0" justify="start" gap="0.2rem">
          <TabButton
            type="general"
            active={activeTab === "general"}
            onClick={() => setActiveTab("general")}
          >
            종합
          </TabButton>
          <TabButton
            type="ingame"
            active={activeTab === "ingame"}
            onClick={() => setActiveTab("ingame")}
          >
            인게임 정보
          </TabButton>
        </Flexbox>
      </Container>
    </Layout>
  );
};

export default SummonerContentTab;
