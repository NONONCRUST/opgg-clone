import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import NavigationBarItem from "./NavigationBarItem";

const Base = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
`;

const NavigationBar: React.FC = () => {
  const router = useRouter();

  return (
    <Base>
      <NavigationBarItem
        name="홈"
        active={router.pathname === "/"}
        onClick={() => router.push("/")}
      />
      <NavigationBarItem name="챔피언 분석" active={false} />
      <NavigationBarItem name="커뮤니티" active={false} />
    </Base>
  );
};

export default NavigationBar;
