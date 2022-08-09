import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";
import MainInput from "../MainInput/MainInput";

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
      background-color: ${palette.gray[800]};
    `}
`;

const HomePage: React.FC = () => {
  return (
    <Base>
      <div className="main-image">OP.GG</div>
      <MainInput />
    </Base>
  );
};

export default HomePage;
