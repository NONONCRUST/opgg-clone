import React from "react";
import styled from "@emotion/styled";
import { purple, red, yellow } from "../../styles/palette";

type MatchResultChipVariantType =
  | "double"
  | "triple"
  | "quadra"
  | "penta"
  | "mvp"
  | "ace";

const getMatchResultChipText = (variant?: MatchResultChipVariantType) => {
  switch (variant) {
    case "double":
      return "더블킬";
    case "triple":
      return "트리플킬";
    case "quadra":
      return "쿼드라킬";
    case "penta":
      return "펜타킬";
    case "mvp":
      return "MVP";
    case "ace":
      return "ACE";
  }
};

const getMatchResultChipBackgroundColor = (
  variant: MatchResultChipVariantType
) => {
  if (variant === "mvp") return yellow[500];
  if (variant === "ace") return purple[600];
  if (variant === "double" || "triple" || "quadra" || "penta") return red[500];
};

interface ContainerProps {
  variant: MatchResultChipVariantType;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.3rem;

  padding: 0.5rem;

  height: 18px;
  font-size: 0.75rem;
  color: white;
  border-radius: 2rem;

  background-color: ${({ variant }) =>
    getMatchResultChipBackgroundColor(variant)};
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  variant?: MatchResultChipVariantType;
}

const MatchResultChip: React.FC<Props> = ({ variant = "double", ...props }) => {
  return (
    <Container variant={variant} {...props}>
      {getMatchResultChipText(variant)}
    </Container>
  );
};

export default MatchResultChip;
