import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MdSearch } from "react-icons/md";
import useOutsideClick from "../../hooks/useOutsideClick";
import useSearchHistory from "../../hooks/useSearchHistory";
import { theme } from "../../styles/theme";
import MainInputDropdownMenu from "./MainInputDropdownMenu";

interface ContainerProps {
  inputOpen: boolean;
}

const Container = styled.div<ContainerProps>`
  display: none;
  flex-direction: column;
  justify-content: center;
  position: relative;

  height: 2rem;
  border-radius: 0.25rem;

  background-color: white;
  box-shadow: ${theme.elevation4};

  .input {
    border: none;
    outline: none;
    width: calc(100% - 5rem);
    height: 2rem;
    margin: 0.5rem 1rem;

    ::placeholder {
      visibility: hidden;
    }
  }

  ${({ inputOpen }) =>
    inputOpen &&
    css`
      .input {
        width: 16rem;
        ::placeholder {
          visibility: visible;
        }
      }
    `}

  .icon {
    position: absolute;
    right: 0.5rem;
    top: 0.3rem;

    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color: ${theme.primary};
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    display: flex;
  }
`;

const HeaderMainInput: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const mainInputRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onOutsideClick = () => {
    setDropdownOpen(false);
    setInputOpen(false);
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
    setInputOpen(false);
    setDropdownOpen(false);
  };

  const onFocusInput = () => {
    setDropdownOpen(true);
    setInputOpen(true);
  };

  const onEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") search();
  };

  return (
    <Container ref={mainInputRef} inputOpen={inputOpen}>
      <input
        value={inputValue}
        className="input"
        placeholder="소환사명..."
        ref={inputRef}
        onFocus={onFocusInput}
        onChange={onChangeInput}
        onKeyPress={onEnter}
      />
      <MdSearch className="icon" onClick={search} />
      {dropdownOpen && <MainInputDropdownMenu type="header" />}
    </Container>
  );
};

export default HeaderMainInput;
