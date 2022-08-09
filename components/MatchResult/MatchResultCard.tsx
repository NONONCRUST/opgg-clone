import { css } from "@emotion/react";
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

  ${({ theme, result }) =>
    theme.mode === "dark" &&
    result === "win" &&
    css`
      background-color: ${palette.blue[900]};
    `}

  ${({ theme, result }) =>
    theme.mode === "dark" &&
    result === "lose" &&
    css`
      background-color: ${palette.red[900]};
    `}
`;

interface Props {
  children: React.ReactNode;
  result: "win" | "lose";
}

const MatchResultCard: React.FC<Props> = ({ children, result }) => {
  return <Container result={result}>{children}</Container>;
};

export default MatchResultCard;
