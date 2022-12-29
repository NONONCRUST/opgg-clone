import React, { useRef, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import useOutsideClick from '../../hooks/useOutsideClick';
import { theme } from '../../lib/styles/theme';
import MainInputDropdownMenu from './MainInputDropdownMenu';
import useDebounce from '../../hooks/useDebounce';
import MainInputAutoComplete from './MainInputAutoComplete';
import { useSummonersQuery } from '../../lib/queries';

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

  .gg-button {
    position: absolute;
    right: 1.5rem;
    top: 0.3rem;

    font-size: 1.2rem;
    font-weight: 600;
    outline: none;
    border: none;
    background-color: white;
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
  const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);
  const [inputOpen, setInputOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const debouncedInputValue = useDebounce(inputValue);

  const mainInputRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOutsideClick = () => {
    setDropdownOpen(false);
    setInputOpen(false);
    setInputValue('');
    setAutoCompleteOpen(false);
  };

  const { data: summonersData } = useSummonersQuery(debouncedInputValue);

  const router = useRouter();

  useOutsideClick(mainInputRef, handleOutsideClick);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value !== '') setDropdownOpen(false);
    if (event.target.value === '') setDropdownOpen(true);

    if (event.target.value !== '') setAutoCompleteOpen(true);
    if (event.target.value === '') setAutoCompleteOpen(false);
  };

  const search = () => {
    if (inputValue === '') return;

    setInputValue('');
    setInputOpen(false);
    setDropdownOpen(false);
    setAutoCompleteOpen(false);

    router.push(`/summoners/${inputValue}`);
  };

  const handleInputFocus = () => {
    setDropdownOpen(true);
    setInputOpen(true);
  };

  const handleInputEnterPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') search();
  };

  return (
    <Container ref={mainInputRef} inputOpen={inputOpen}>
      <input
        value={inputValue}
        className="input"
        placeholder="소환사명..."
        ref={inputRef}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onKeyPress={handleInputEnterPress}
      />
      <button type="button" className="gg-button" onClick={search}>
        .GG
      </button>
      {dropdownOpen && !autoCompleteOpen && (
        <MainInputDropdownMenu type="header" />
      )}
      {summonersData && summonersData.length !== 0 && autoCompleteOpen && (
        <MainInputAutoComplete
          type="header"
          summonersData={summonersData}
          searchKeyword={debouncedInputValue}
        />
      )}
    </Container>
  );
};

export default HeaderMainInput;
