import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { MdStar, MdStarOutline } from "react-icons/md";
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

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: ${palette.gray[700]};
      border: 1px solid ${palette.gray[600]};
    `}
`;

interface Props {
  isFavorite: boolean;
}

const FavoriteIconButton: React.FC<Props> = ({ isFavorite }) => {
  return (
    <Container isFavorite={isFavorite}>
      {!isFavorite && <MdStarOutline size="20px" color={palette.gray[400]} />}
      {isFavorite && <MdStar size="20px" color="white" />}
    </Container>
  );
};

export default FavoriteIconButton;
