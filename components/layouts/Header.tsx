import styled from "@emotion/styled";
import React from "react";
import GNB from "./GNB";
import LNB from "./LNB";
import NotificationLNB from "./NotificationLNB";
import palette from "../../styles/palette";
import { theme } from "../../styles/theme";

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
      <NotificationLNB
        contents="게이밍 체어, 굿즈, 문상까지! 역대급 상품 라인업 어쩌구"
        backgroundColor={palette.gray[300]}
      />
    </Base>
  );
};

export default Header;
