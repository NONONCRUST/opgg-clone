import React from "react";
import styled from "@emotion/styled";
import palette from "../../styles/palette";

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
  if (variant === "double" || "triple" || "quadra" || "penta")
    return palette.red[500];
  if (variant === "mvp") return palette.yellow[500];
  if (variant === "ace") return palette.purple[600];
};

interface ContainerProps {
  variant: MatchResultChipVariantType;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;

  padding: 0.5rem;

  height: 18px;
  font-size: 0.75rem;
  color: white;
  border-radius: 2rem;

  background-color: ${({ variant }) =>
    getMatchResultChipBackgroundColor(variant)};
`;

interface Props {
  variant?: MatchResultChipVariantType;
}

const MatchResultChip: React.FC<Props> = ({ variant = "double" }) => {
  return (
    <Container variant={variant}>{getMatchResultChipText(variant)}</Container>
  );
};

export default MatchResultChip;
