import styled from "@emotion/styled";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import palette from "../../styles/palette";

interface ContainerProps {
  result: "win" | "lose";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: flex-end;
  padding: 0.5rem;
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;

  background-color: ${({ result }) =>
    result === "win" ? palette.blue[200] : palette.red[200]};

  cursor: pointer;

  &:hover {
    background-color: ${({ result }) =>
      result === "win" ? palette.blue[300] : palette.red[300]};
  }
`;

interface Props {
  result: "win" | "lose";
}

const MatchResultAction: React.FC<Props> = ({ result }) => {
  return (
    <Container result={result}>
      <MdKeyboardArrowDown />
    </Container>
  );
};

export default MatchResultAction;
