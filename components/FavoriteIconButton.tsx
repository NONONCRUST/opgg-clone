import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { MdStar, MdStarOutline } from "react-icons/md";
import useFavoriteSummoner from "../hooks/useFavoriteSummoner";
import palette from "../styles/palette";

interface ContainerProps {
  isFavorite: boolean;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem;
  background-color: ${({ isFavorite }) =>
    isFavorite ? palette.yellow[400] : "white"};
  border: 1px solid ${palette.gray[300]};
  border-radius: 0.25rem;

  cursor: pointer;

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: ${palette.gray[700]};
      border: 1px solid ${palette.gray[600]};
    `}
`;

interface Props {
  isFavorite: boolean;
  summonerName: string;
}

const FavoriteIconButton: React.FC<Props> = ({ summonerName }) => {
  const { favoriteSummoner, addFavoriteSummoner, removeFavoriteSummoner } =
    useFavoriteSummoner();

  const isFavorite = favoriteSummoner.includes(summonerName);

  const onClickFavoriteIconButton = () => {
    if (isFavorite) removeFavoriteSummoner(summonerName);
    if (!isFavorite) addFavoriteSummoner(summonerName);
  };
  return (
    <Container isFavorite={isFavorite} onClick={onClickFavoriteIconButton}>
      {!isFavorite && <MdStarOutline size="20px" color={palette.gray[400]} />}
      {isFavorite && <MdStar size="20px" color="white" />}
    </Container>
  );
};

export default FavoriteIconButton;
