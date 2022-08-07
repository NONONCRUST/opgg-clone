import styled from "@emotion/styled";
import React from "react";
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
    font-size: 6rem;
    color: white;
    font-weight: 700;
    margin-top: 8rem;
  }
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
