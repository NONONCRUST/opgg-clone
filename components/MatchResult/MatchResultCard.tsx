import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";

interface ContainerProps {
  result: "win" | "lose";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;

  border-radius: 0.25rem;
  background-color: ${({ result }) =>
    result === "win" ? palette.blue[50] : palette.red[50]};
`;

interface Props {
  children: React.ReactNode;
  result: "win" | "lose";
}

const MatchResultCard: React.FC<Props> = ({ children, result }) => {
  return <Container result={result}>{children}</Container>;
};

export default MatchResultCard;
