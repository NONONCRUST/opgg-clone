import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NavigationBarItem from "./NavigationBarItem";

const Base = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const NavigationBar: React.FC = () => {
  const router = useRouter();

  return (
    <Base>
      <NavigationBarItem name="홈" active={router.pathname === "/"} />
      <NavigationBarItem name="챔피언 분석" active={false} />
      <NavigationBarItem name="커뮤니티" active={false} />
    </Base>
  );
};

export default NavigationBar;
