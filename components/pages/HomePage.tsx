import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import MainInput from "../main-input/MainInput";
import { gray } from "../../styles/palette";
import HeadMeta from "../HeadMeta";
import Image from "next/image";
import Flexbox from "../layouts/Flexbox";

const Base = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  background-color: ${theme.primary};
  min-height: 100vh;

  .main-logo {
    margin-top: 8rem;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: ${gray[800]};
    `}
`;

const HomePage: React.FC = () => {
  return (
    <Base>
      <HeadMeta />
      <Flexbox padding="8rem 0 0 0">
        <Image
          className="main-logo"
          width="150px"
          height="36px"
          src="/opgglogo.svg"
          alt="opgg-logo"
        />
      </Flexbox>
      <MainInput />
    </Base>
  );
};

export default HomePage;
