import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from '@store/index';
import { searchActions } from '@store/searchSlice';
import { theme } from '@styles/theme';
import Avatar from '@components/common/Avatar';
import Divider from '@components/common/Divider';
import Typography from '@components/common/Typography';

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.2rem 0.75rem;

  .dropdown-item-area {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface Props {
  type?: 'all' | 'champion';
  champion?: {
    kor: string;
    eng: string;
  };
}

const ChampionSearchDropdownItem: React.FC<Props> = ({
  type = 'champion',
  champion = {
    kor: '',
    eng: '',
  },
}) => {
  const dispatch = useDispatch();

  const handleChampionTypeClick = () => {
    dispatch(searchActions.setChampionSearchFilter(champion.eng));
  };

  const handleAllTypeClick = () => {
    dispatch(searchActions.setChampionSearchFilter(''));
  };

  return (
    <>
      <Container>
        {type === 'champion' && (
          <div
            role="button"
            className="dropdown-item-area"
            onClick={handleChampionTypeClick}
          >
            <Avatar size="24px" src={`/champion/${champion.eng}.png`} />
            <Typography size={theme.fontSize.caption3}>
              {champion.kor}
            </Typography>
          </div>
        )}
        {type === 'all' && (
          <div className="dropdown-item-area" onClick={handleAllTypeClick}>
            <Avatar size="24px" />
            <Typography size={theme.fontSize.caption3}>모든 챔피언</Typography>
          </div>
        )}
      </Container>
      <Divider />
    </>
  );
};

export default ChampionSearchDropdownItem;
