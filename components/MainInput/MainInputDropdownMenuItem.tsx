import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";
import { MdClose, MdStar, MdStarOutline } from "react-icons/md";
import Flexbox from "../layouts/Flexbox";
import useFavoriteSummoner from "../../hooks/useFavoriteSummoner";
import useSearchHistory from "../../hooks/useSearchHistory";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 0.875rem;

  padding: 0.5rem 1rem;

  color: ${palette.gray[500]};

  cursor: pointer;

  &:hover {
    background-color: ${palette.gray[100]};
  }
`;

interface Props {
  name: string;
  isFavorite: boolean;
  currentTab: "recent" | "favorite";
}

const MainInputDropdownMenuItem: React.FC<Props> = ({
  name,
  isFavorite,
  currentTab,
}) => {
  const { addFavoriteSummoner, removeFavoriteSummoner } = useFavoriteSummoner();
  const { removeSearchHistory } = useSearchHistory();

  const onClickRemoveIcon = () => {
    if (currentTab === "recent") removeSearchHistory(name);
    if (currentTab === "favorite") removeFavoriteSummoner(name);
  };

  return (
    <Container>
      <div>{name}</div>
      <Flexbox gap="1rem">
        {currentTab !== "favorite" && isFavorite && (
          <MdStar
            size="20px"
            color={palette.yellow[400]}
            onClick={() => removeFavoriteSummoner(name)}
          />
        )}
        {currentTab !== "favorite" && !isFavorite && (
          <MdStarOutline
            size="20px"
            onClick={() => addFavoriteSummoner(name)}
          />
        )}
        <MdClose size="20px" cursor="pointer" onClick={onClickRemoveIcon} />
      </Flexbox>
    </Container>
  );
};

export default MainInputDropdownMenuItem;
