import React from "react";
import styled from "@emotion/styled";
import MatchResultCard from "./MatchResultCard";
import MatchResultGame from "./MatchResultGame";
import MatchResultInfo from "./MatchResultInfo";
import MatchResultParticipants from "./MatchResultParticipants";
import MatchResultAction from "./MatchResultAction";
import Flexbox from "../layouts/Flexbox";
import palette from "../../styles/palette";

interface ContainerProps {
  result: "win" | "lose";
}

const Container = styled.div<ContainerProps>`
  width: 100%;

  .indicator {
    height: 6rem;
    width: 0.5rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    background-color: ${({ result }) =>
      result === "win" ? palette.blue[500] : palette.red[500]};
  }
`;

interface Props {
  result: "win" | "lose";
}

const MatchResult: React.FC<Props> = ({ result }) => {
  return (
    <Container result={result}>
      <MatchResultCard result={result}>
        <Flexbox>
          <div className="indicator" />
          <MatchResultGame result={result} />
          <MatchResultInfo result={result} />
          <MatchResultParticipants />
        </Flexbox>
        <MatchResultAction result={result} />
      </MatchResultCard>
    </Container>
  );
};

export default MatchResult;