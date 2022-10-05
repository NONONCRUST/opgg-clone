import React from "react";
import styled from "@emotion/styled";
import { MdClose, MdStar, MdStarOutline } from "react-icons/md";
import Flexbox from "@components/layouts/Flexbox";
import useFavoriteSummoner from "@hooks/useFavoriteSummoner";
import useSearchHistory from "@hooks/useSearchHistory";
import { useRouter } from "next/router";
import { gray, yellow } from "@styles/palette";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  color: ${gray[500]};
  cursor: pointer;

  &:hover {
    background-color: ${gray[100]};
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

  const router = useRouter();

  const onClickRemoveIcon = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    event.stopPropagation();
    if (currentTab === "recent") removeSearchHistory(name);
    if (currentTab === "favorite") removeFavoriteSummoner(name);
  };

  const onClickStarIcon = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    event.stopPropagation();
    if (isFavorite) removeFavoriteSummoner(name);
    if (!isFavorite) addFavoriteSummoner(name);
  };

  const onClickMenuItem = () => {
    router.push(`/summoners/${name}`);
  };

  return (
    <Container onClick={onClickMenuItem}>
      <div>{name}</div>
      <Flexbox gap="1rem">
        {currentTab !== "favorite" && isFavorite && (
          <MdStar size="20px" color={yellow[400]} onClick={onClickStarIcon} />
        )}
        {currentTab !== "favorite" && !isFavorite && (
          <MdStarOutline size="20px" onClick={onClickStarIcon} />
        )}
        <MdClose size="20px" cursor="pointer" onClick={onClickRemoveIcon} />
      </Flexbox>
    </Container>
  );
};

export default MainInputDropdownMenuItem;
