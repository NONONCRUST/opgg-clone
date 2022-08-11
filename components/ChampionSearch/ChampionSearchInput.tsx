import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { MdSearch } from "react-icons/md";
import palette from "../../styles/palette";
import ChampionSearchDropdown from "./ChampionSearchDropdown";
import ChampionSearchDropdownItem from "./ChampionSearchDropdownItem";
import { championList } from "../../lib/staticData";
import useOutsideClick from "../../hooks/useOutsideClick";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 14rem;
  height: 1.75rem;
  border-radius: 0.25rem;
  background-color: ${palette.gray[100]};
  padding: 0 0.5rem;

  .input {
    width: 100%;
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

const ChampionSearchInput: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredChampionList, setFilteredChampionList] =
    useState(championList);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setFilteredChampionList(
      championList.filter((champion) =>
        champion.kor.includes(event.target.value)
      )
    );
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, () => setDropdownOpen(false));

  return (
    <Container ref={ref}>
      <input
        className="input"
        value={inputValue}
        placeholder="챔피언 검색"
        onChange={onChangeInput}
        onFocus={() => setDropdownOpen(true)}
      />
      <MdSearch className="icon" color={palette.gray[500]} />
      {dropdownOpen && (
        <ChampionSearchDropdown>
          {filteredChampionList.map((champion, index) => (
            <ChampionSearchDropdownItem champion={champion} key={index} />
          ))}
        </ChampionSearchDropdown>
      )}
    </Container>
  );
};

export default ChampionSearchInput;
