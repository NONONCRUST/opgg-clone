import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { theme } from "../../styles/theme";
import Button from "../common/Button";
import DarkModeButton from "../DarkModeButton";
import Flexbox from "./Flexbox";

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  background-color: #29344e;
  padding-right: 1rem;

  color: white;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
    font-weight: 600;
    color: white;
    cursor: pointer;
    background-color: ${theme.primary};
  }
`;

const GNB: React.FC = () => {
  return (
    <Base>
      <Link href="/">
        <a className="logo">OP.GG</a>
      </Link>

      <Flexbox gap="1rem">
        <DarkModeButton />
        <Button size="small">로그인</Button>
      </Flexbox>
    </Base>
  );
};

export default GNB;
