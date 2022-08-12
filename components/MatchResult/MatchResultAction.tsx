import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { blue, red } from "../../styles/palette";

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
    result === "win" ? blue[200] : red[200]};

  cursor: pointer;

  &:hover {
    background-color: ${({ result }) =>
      result === "win" ? blue[300] : red[300]};
  }

  .match-result-arrow-down-icon {
    color: ${({ result }) => (result === "win" ? blue[500] : red[500])};
  }

  ${({ theme, result }) =>
    theme.mode === "dark" &&
    result === "win" &&
    css`
      background-color: ${blue[700]};
    `}

  ${({ theme, result }) =>
    theme.mode === "dark" &&
    result === "lose" &&
    css`
      background-color: ${red[700]};
    `}
`;

interface Props {
  result: "win" | "lose";
  matchDetailOpen: boolean;
  setMatchDetailOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MatchResultAction: React.FC<Props> = ({
  result,
  matchDetailOpen,
  setMatchDetailOpen,
}) => {
  return (
    <Container
      result={result}
      onClick={() => setMatchDetailOpen((prev) => !prev)}
    >
      {!matchDetailOpen && (
        <MdKeyboardArrowDown
          className="match-result-arrow-down-icon"
          size="1.25rem"
        />
      )}
      {matchDetailOpen && (
        <MdKeyboardArrowUp
          className="match-result-arrow-down-icon"
          size="1.25rem"
        />
      )}
    </Container>
  );
};

export default MatchResultAction;
