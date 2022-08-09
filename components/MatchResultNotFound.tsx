import styled from "@emotion/styled";
import React from "react";
import { MdInfoOutline } from "react-icons/md";
import palette from "../styles/palette";
import Card from "./common/Card";
import Typography from "./common/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 2rem;
  color: ${palette.gray[300]};
`;

const MatchResultNotFound: React.FC = () => {
  return (
    <Card>
      <Container>
        <MdInfoOutline size="3rem" />
        <Typography>기록된 전적이 없습니다.</Typography>
      </Container>
    </Card>
  );
};

export default MatchResultNotFound;
