import styled from "@emotion/styled";
import React, { useState } from "react";
import NavigationBarItem from "./NavigationBarItem";

const Base = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const NavigationBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState("홈");

  return (
    <Base>
      <NavigationBarItem name="홈" active={activeTab === "홈"} />
      <NavigationBarItem
        name="챔피언 분석"
        active={activeTab === "챔피언 분석"}
      />
      <NavigationBarItem name="커뮤니티" active={activeTab === "커뮤니티"} />
    </Base>
  );
};

export default NavigationBar;
