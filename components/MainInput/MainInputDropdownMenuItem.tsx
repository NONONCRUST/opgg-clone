import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 0.5rem 1rem;

  color: ${palette.gray[700]};
`;

interface Props {
  name: string;
}

const MainInputDropdownMenuItem: React.FC<Props> = ({ name }) => {
  return (
    <Container>
      <div>{name}</div>
      <div>ㅁㄴㅇ</div>
    </Container>
  );
};

export default MainInputDropdownMenuItem;
