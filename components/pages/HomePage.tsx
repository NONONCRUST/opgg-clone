import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";
import { theme } from "../../styles/theme";
import MainInput from "../main-input/MainInput";
import { gray } from "../../styles/palette";
import HeadMeta from "../HeadMeta";

const Base = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  background-color: ${theme.primary};
  min-height: 100vh;

  .main-image {
    font-size: 4rem;
    color: white;
    font-weight: 700;
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
      <div className="main-image">OP.GG</div>
      <MainInput />
    </Base>
  );
};

export default HomePage;
