import styled from "@emotion/styled";
import React from "react";
import { MdSearch } from "react-icons/md";
import palette from "../styles/palette";

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  position: relative;
  height: 2.5rem;
  border-radius: 0.25rem;
  background-color: ${palette.gray[100]};
  padding: 0 1rem;

  .input {
    width: calc(100% - 1rem);
    color: ${palette.gray[500]};
    border: 1px solid red;
    border: none;
    outline: none;
    background-color: ${palette.gray[100]};
  }

  .icon {
    position: absolute;
    right: 0.5rem;
  }
`;

interface Props {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const ChampionFilterInput: React.FC<Props> = ({
  inputValue,
  setInputValue,
}) => {
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Container>
      <input
        className="input"
        value={inputValue}
        onChange={onChangeInput}
        placeholder="챔피언 검색"
      />
      <MdSearch className="icon" color={palette.gray[500]} />
    </Container>
  );
};

export default ChampionFilterInput;
