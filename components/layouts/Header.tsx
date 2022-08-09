import styled from "@emotion/styled";
import React from "react";
import GNB from "./GNB";
import LNB from "./LNB";

const Base = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  return (
    <Base>
      <GNB />
      <LNB />
    </Base>
  );
};

export default Header;
