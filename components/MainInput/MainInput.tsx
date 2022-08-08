import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { theme } from "../../styles/theme";
import MainInputDropdownMenu from "./MainInputDropdownMenu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  width: 40rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: white;
  padding: 0.5rem 2rem;
  box-shadow: ${theme.elevation4};

  .input {
    border: none;
    outline: none;
    width: 100%;
    height: 2rem;
  }

  .label {
    font-size: 0.75rem;
    font-weight: 500;
  }

  .icon {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    cursor: pointer;
    color: ${theme.primary};
  }
`;

const MainInput: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <Container>
      <div className="label">Search</div>
      <input
        className="input"
        placeholder="소환사명"
        ref={inputRef}
        onFocus={() => setDropdownOpen(true)}
      />
      <div className="icon">검색</div>
      {dropdownOpen && <MainInputDropdownMenu />}
    </Container>
  );
};

export default MainInput;
