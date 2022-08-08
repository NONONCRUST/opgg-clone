import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";
import { MdClose, MdStar, MdStarOutline } from "react-icons/md";
import Flexbox from "../layouts/Flexbox";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

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
  return (
    <Container>
      <div>{name}</div>
      <Flexbox gap="1rem">
        {isFavorite && <MdStar size="20px" />}
        {!isFavorite && <MdStarOutline size="20px" />}
        <MdClose size="20px" cursor="pointer" />
      </Flexbox>
    </Container>
  );
};

export default MainInputDropdownMenuItem;
