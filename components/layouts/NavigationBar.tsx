import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import NavigationBarItem from "./NavigationBarItem";
import Link from "next/link";

const Base = styled.nav`
  height: 100%;

  .nav-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100%;
  }
`;

const NavigationBar: React.FC = () => {
  const router = useRouter();

  return (
    <Base>
      <ul className="nav-list">
        <NavigationBarItem
          name="홈"
          href="/"
          active={router.pathname === "/"}
        />
        <NavigationBarItem
          name="챔피언 분석"
          href="/champions"
          active={router.pathname.includes("/champions")}
        />
      </ul>
    </Base>
  );
};

export default NavigationBar;
