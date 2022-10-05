import React from "react";
import styled from "@emotion/styled";
import GNB from "@components/layouts/GNB";
import LNB from "@components/layouts/LNB";

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
