import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "../../store";
import { searchActions } from "../../store/searchSlice";
import { theme } from "../../styles/theme";
import Avatar from "../common/Avatar";
import Divider from "../common/Divider";
import Typography from "../common/Typography";

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
  type?: "all" | "champion";
  champion?: {
    kor: string;
    eng: string;
  };
}

const ChampionSearchDropdownItem: React.FC<Props> = ({
  type = "champion",
  champion = {
    kor: "",
    eng: "",
  },
}) => {
  const dispatch = useDispatch();

  const onClickChampion = () => {
    dispatch(searchActions.setChampionSearchFilter(champion.eng));
  };

  const onClickAll = () => {
    dispatch(searchActions.setChampionSearchFilter(""));
  };

  return (
    <>
      <Container>
        {type === "champion" && (
          <div className="dropdown-item-area" onClick={onClickChampion}>
            <Avatar size="24px" src={`/champion/${champion.eng}.png`} />
            <Typography size={theme.fontSize.caption3}>
              {champion.kor}
            </Typography>
          </div>
        )}
        {type === "all" && (
          <div className="dropdown-item-area" onClick={onClickAll}>
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
