import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import useSearchHistory from "../../hooks/useSearchHistory";
import { theme } from "../../styles/theme";
import MainInputDropdownMenu from "./MainInputDropdownMenu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  width: 38rem;
  height: 4rem;
  border-radius: 2rem;
  background-color: white;
  padding: 0.5rem 2rem;
  box-shadow: ${theme.elevation4};

  .input {
    border: none;
    outline: none;
    width: calc(100% - 2.5rem);
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
  const [inputValue, setInputValue] = useState("");

  const mainInputRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onOutsideClick = () => {
    setDropdownOpen(false);
    setInputValue("");
  };

  useOutsideClick(mainInputRef, onOutsideClick);
  const { addSearchHistory } = useSearchHistory();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value !== "") setDropdownOpen(false);
    if (event.target.value === "") setDropdownOpen(true);
  };

  const search = () => {
    if (inputValue === "") return;
    addSearchHistory(inputValue);
    setInputValue("");
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") search();
  };

  return (
    <Container ref={mainInputRef}>
      <div className="label">Search</div>
      <input
        value={inputValue}
        className="input"
        placeholder="소환사명"
        ref={inputRef}
        onFocus={() => setDropdownOpen(true)}
        onChange={onChangeInput}
        onKeyDown={onEnter}
      />
      <div className="icon" onClick={search}>
        검색
      </div>
      {dropdownOpen && <MainInputDropdownMenu />}
    </Container>
  );
};

export default MainInput;
