import React from 'react';
import styled from '@emotion/styled';
import { MdSearch } from 'react-icons/md';
import { gray } from '@lib/styles/palette';

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  position: relative;
  height: 2.5rem;
  border-radius: 0.25rem;
  background-color: ${gray[100]};
  padding: 0 1rem;

  .input {
    width: calc(100% - 1rem);
    color: ${gray[500]};
    border: 1px solid red;
    border: none;
    outline: none;
    background-color: ${gray[100]};
  }

  .icon {
    position: absolute;
    right: 0.5rem;
  }
`;

interface Props {
  inputValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ChampionFilterInput: React.FC<Props> = ({ inputValue, onChange }) => {
  return (
    <Container>
      <input
        className="input"
        value={inputValue}
        onChange={onChange}
        placeholder="챔피언 검색"
      />
      <MdSearch className="icon" color={gray[500]} />
    </Container>
  );
};

export default ChampionFilterInput;
