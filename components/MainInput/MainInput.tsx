import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MdSearch } from "react-icons/md";
import useOutsideClick from "../../hooks/useOutsideClick";
import useSearchHistory from "../../hooks/useSearchHistory";
import { theme } from "../../styles/theme";
import MainInputDropdownMenu from "./MainInputDropdownMenu";
import { gray } from "../../styles/palette";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;

  height: 4rem;

  background-color: white;
  box-shadow: ${theme.elevation4};

  .input {
    border: none;
    outline: none;
    width: calc(100% - 2.5rem);
    height: 2rem;
    margin: 0.5rem 2rem;
    border-radius: 2rem;
  }

  .label {
    font-size: 0.75rem;
    font-weight: 500;
    margin: 0.5rem 2rem;
  }

  .icon {
    position: absolute;
    right: 1.5rem;
    top: 1.3rem;

    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color: ${theme.primary};
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    width: 38rem;
    border-radius: 2rem;
  }

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: ${gray[700]};
      color: white;

      .input {
        background-color: ${gray[700]};
        color: white;
      }
    `}
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

  const router = useRouter();

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
    router.push(`/summoners/${inputValue}`);
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
        onKeyPress={onEnter}
      />
      <MdSearch className="icon" onClick={search} />
      {dropdownOpen && <MainInputDropdownMenu />}
    </Container>
  );
};

export default MainInput;
