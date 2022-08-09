import styled from "@emotion/styled";
import React from "react";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import DarkModeButton from "../DarkModeButton";
import Flexbox from "./Flexbox";

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 3rem;
  background-color: ${theme.primaryVariant};
  padding-right: 1rem;

  color: white;

  .logo {
    padding: 0 1rem;
  }
`;

const GNB: React.FC = () => {
  return (
    <Base>
      <div className="logo">OPGG</div>
      <Flexbox gap="1rem">
        <DarkModeButton />
        <Button size="small">로그인</Button>
      </Flexbox>
    </Base>
  );
};

export default GNB;
