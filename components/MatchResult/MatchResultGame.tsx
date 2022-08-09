import React from "react";
import styled from "@emotion/styled";
import palette from "../../styles/palette";
import Typography from "../common/Typography";
import Divider from "../common/Divider";

interface ContainerProps {
  result: "win" | "lose";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  width: 6rem;
  height: 6rem;
  padding: 0.8rem 1rem;
  margin-right: 2rem;

  .solo-rank-text {
    font-size: 0.75rem;
    color: ${({ result }) =>
      result === "win" ? palette.blue[500] : palette.red[500]};
    font-weight: bold;
  }

  .result-text {
    font-size: 0.75rem;
    color: ${palette.gray[500]};
    font-weight: bold;
  }

  .divider {
    margin-top: 0.5rem;
    border: 0.5px solid
      ${({ result }) =>
        result === "win" ? palette.blue[100] : palette.red[100]};
  }
`;

interface Props {
  result: "win" | "lose";
}

const MatchResultGame: React.FC<Props> = ({ result }) => {
  return (
    <Container result={result}>
      <Typography className="solo-rank-text">솔랭</Typography>
      <Typography size="12px" color={palette.gray[400]}>
        6시간 전
      </Typography>
      <Divider className="divider" />
      <Typography className="result-text">
        {result === "win" ? "승리" : "패배"}
      </Typography>
      <Typography size="12px" color={palette.gray[400]}>
        35분 44초
      </Typography>
    </Container>
  );
};

export default MatchResultGame;
