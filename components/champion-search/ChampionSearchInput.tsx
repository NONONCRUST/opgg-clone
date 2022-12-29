import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { MdSearch } from 'react-icons/md';
import { gray } from '@lib/styles/palette';
import ChampionSearchDropdown from '@components/champion-search/ChampionSearchDropdown';
import ChampionSearchDropdownItem from '@components/champion-search/ChampionSearchDropdownItem';
import { championList } from '@lib/staticData';
import useOutsideClick from '@hooks/useOutsideClick';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 14rem;
  height: 1.75rem;
  border-radius: 0.25rem;
  background-color: ${gray[100]};
  padding: 0 0.5rem;

  .input {
    width: 100%;
    color: ${gray[500]};
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
  onChampionSearchDropdownItemClick: (champion: string) => void;
}

const ChampionSearchInput: React.FC<Props> = ({
  onChampionSearchDropdownItemClick,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredChampionList, setFilteredChampionList] =
    useState(championList);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setFilteredChampionList(
      championList.filter((champion) =>
        champion.kor.includes(event.target.value),
      ),
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
        onChange={handleInputChange}
        onFocus={() => setDropdownOpen(true)}
      />
      <MdSearch className="icon" color={gray[500]} />
      {dropdownOpen && (
        <ChampionSearchDropdown>
          <ChampionSearchDropdownItem
            type="all"
            onClick={onChampionSearchDropdownItemClick}
          />
          {filteredChampionList.map((champion, index) => (
            <ChampionSearchDropdownItem
              onClick={onChampionSearchDropdownItemClick}
              champion={champion}
              key={index}
            />
          ))}
        </ChampionSearchDropdown>
      )}
    </Container>
  );
};

export default ChampionSearchInput;
