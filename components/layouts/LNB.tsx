import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import { theme } from "../../styles/theme";
import HeaderMainInput from "../main-input/HeaderMainInput";
import NavigationBar from "./NavigationBar";

const Base = styled.div`
  display: flex;

  height: 3rem;
  background-color: ${theme.primary};

  .contents {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  const router = useRouter();

  return (
    <Base>
      <div className="contents">
        <NavigationBar />
        {router.pathname !== "/" && <HeaderMainInput />}
      </div>
    </Base>
  );
};

export default LNB;
