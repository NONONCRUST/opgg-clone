import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { MdStar, MdStarOutline } from "react-icons/md";
import useFavoriteSummoner from "../hooks/useFavoriteSummoner";
import { gray, yellow } from "../styles/palette";

interface ContainerProps {
  isFavorite?: boolean;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem;
  background-color: ${({ isFavorite }) => (isFavorite ? yellow[400] : "white")};
  border: 1px solid ${gray[300]};
  border-radius: 0.25rem;

  cursor: pointer;

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: ${gray[700]};
      border: 1px solid ${gray[600]};
    `}
`;

interface Props {
  isFavorite: boolean;
  summonerName?: string;
}

const FavoriteIconButton: React.FC<Props> = ({ summonerName }) => {
  const { favoriteSummoner, addFavoriteSummoner, removeFavoriteSummoner } =
    useFavoriteSummoner();

  const isFavorite = summonerName
    ? favoriteSummoner.includes(summonerName)
    : false;

  const onClickFavoriteIconButton = () => {
    if (!summonerName) return;

    if (isFavorite) removeFavoriteSummoner(summonerName);
    if (!isFavorite) addFavoriteSummoner(summonerName);
  };
  return (
    <Container
      isFavorite={isFavorite}
      onClick={onClickFavoriteIconButton}
      aria-label="toggle-favorite"
    >
      {!isFavorite && <MdStarOutline size="20px" color={gray[400]} />}
      {isFavorite && <MdStar size="20px" color="white" />}
    </Container>
  );
};

export default FavoriteIconButton;
