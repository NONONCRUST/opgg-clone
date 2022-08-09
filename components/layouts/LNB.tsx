import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../styles/theme";
import NavigationBar from "./NavigationBar";

const Base = styled.div`
  display: flex;

  height: 3rem;
  background-color: ${theme.primary};

  .contents {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin: 0 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .contents {
      margin: 0 auto;
      max-width: ${theme.media.desktop};
    }
  }
`;

const LNB: React.FC = () => {
  return (
    <Base>
      <div className="contents">
        <NavigationBar />
      </div>
    </Base>
  );
};

export default LNB;
