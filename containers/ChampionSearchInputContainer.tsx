import ChampionSearchInput from '@components/champion-search/ChampionSearchInput';
import { useDispatch } from '@store/index';
import { searchActions } from '@store/searchSlice';
import React from 'react';

const ChampionSearchInputContainer: React.FC = () => {
  const dispatch = useDispatch();

  const handleChampionSearchDropdownItemClick = (champion: string) => {
    dispatch(searchActions.setChampionSearchFilter(champion));
  };

  return (
    <ChampionSearchInput
      onChampionSearchDropdownItemClick={handleChampionSearchDropdownItemClick}
    />
  );
};

export default ChampionSearchInputContainer;
