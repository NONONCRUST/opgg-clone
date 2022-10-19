import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import useOutsideClick from '../../hooks/useOutsideClick';
import { theme } from '../../styles/theme';
import MainInputDropdownMenu from './MainInputDropdownMenu';
import MainInputAutoComplete from './MainInputAutoComplete';
import { useSummonersQuery } from '../../lib/queries';
import useDebounce from '../../hooks/useDebounce';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    margin: 0rem 2rem;
    border-radius: 2rem;
  }

  .label {
    font-size: 0.75rem;
    font-weight: 500;
    margin: 0.5rem 2rem;
  }

  .gg-button {
    position: absolute;
    right: 1rem;
    top: 1.1rem;

    font-size: 1.5rem;
    font-weight: 600;
    outline: none;
    border: none;
    background-color: white;
    width: 4rem;
    height: 1.5rem;
    cursor: pointer;
    color: ${theme.primary};
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    width: 38rem;
    border-radius: 2rem;
  }
`;

const MainInput: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [autoCompleteOpen, setAutoCompleteOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const debouncedInputValue = useDebounce(inputValue);

  const mainInputRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleOutsideClick = () => {
    setDropdownOpen(false);
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

  const handleInputFocus = () => {
    if (!autoCompleteOpen) setDropdownOpen(true);
  };

  const search = () => {
    if (inputValue === '') return;
    setInputValue('');
    router.push(`/summoners/${inputValue}`);
  };

  const handleInputEnterPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter') search();
  };

  return (
    <Container ref={mainInputRef}>
      <div className="label">Search</div>
      <input
        value={inputValue}
        className="input"
        placeholder="소환사명"
        ref={inputRef}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        onKeyPress={handleInputEnterPress}
      />
      <button type="button" className="gg-button" onClick={search}>
        .GG
      </button>
      {dropdownOpen && <MainInputDropdownMenu />}
      {summonersData && summonersData.length !== 0 && autoCompleteOpen && (
        <MainInputAutoComplete
          summonersData={summonersData}
          searchKeyword={debouncedInputValue}
          inputValue={inputValue}
        />
      )}
    </Container>
  );
};

export default MainInput;
