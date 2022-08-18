import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { theme } from "../../styles/theme";
import DarkModeButton from "../DarkModeButton";
import Flexbox from "./Flexbox";
import Image from "next/image";

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
        <a className="logo">
          <Image
            width="65px"
            height="16px"
            src="/opgglogo.svg"
            alt="opgg-logo"
          />
        </a>
      </Link>
      <Flexbox gap="1rem">
        <DarkModeButton />
      </Flexbox>
    </Base>
  );
};

export default GNB;
