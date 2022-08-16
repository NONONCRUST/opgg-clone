import React from "react";
import styled from "@emotion/styled";
import { theme } from "../styles/theme";
import TabButton from "./common/TabButton";
import Flexbox from "./layouts/Flexbox";
import Layout from "./layouts/Layout";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Typography from "./common/Typography";

const Container = styled.div`
  padding: 0 1rem;

  @media screen and (min-width: ${theme.media.desktop}) {
    padding: 0;
  }
`;

interface Props {
  activeTab: "general" | "ingame";
  setActiveTab: React.Dispatch<React.SetStateAction<"general" | "ingame">>;
  isIngame: boolean;
}

const SummonerContentTab: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  isIngame,
}) => {
  return (
    <Layout>
      <Container>
        <Flexbox padding="0.5rem 0" justify="start" gap="0.2rem" role="tablist">
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
          {isIngame && (
            <>
              <MdKeyboardArrowLeft size="20px" />
              <Typography size="0.875rem" weight={600} color={theme.primary}>
                현재 게임중!
              </Typography>
            </>
          )}
        </Flexbox>
      </Container>
    </Layout>
  );
};

export default SummonerContentTab;
