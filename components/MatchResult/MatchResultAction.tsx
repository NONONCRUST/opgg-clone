import { css } from "@emotion/react";
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

  .match-result-arrow-down-icon {
    color: ${({ result }) =>
      result === "win" ? palette.blue[500] : palette.red[500]};
  }

  ${({ theme, result }) =>
    theme.mode === "dark" &&
    result === "win" &&
    css`
      background-color: ${palette.blue[700]};
    `}

  ${({ theme, result }) =>
    theme.mode === "dark" &&
    result === "lose" &&
    css`
      background-color: ${palette.red[700]};
    `}
`;

interface Props {
  result: "win" | "lose";
}

const MatchResultAction: React.FC<Props> = ({ result }) => {
  return (
    <Container result={result}>
      <MdKeyboardArrowDown
        className="match-result-arrow-down-icon"
        size="1.25rem"
      />
    </Container>
  );
};

export default MatchResultAction;
