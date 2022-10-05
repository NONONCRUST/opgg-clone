import React from "react";
import styled from "@emotion/styled";
import { MdInfoOutline } from "react-icons/md";
import Typography from "@components/common/Typography";
import { gray } from "@styles/palette";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  padding: 2rem;
  color: ${gray[300]};
`;

const FilteredChampionNotFound: React.FC = () => {
  return (
    <Container>
      <MdInfoOutline size="3rem" />
      <Typography>검색 결과가 없습니다.</Typography>
    </Container>
  );
};

export default FilteredChampionNotFound;
