import React from "react";
import styled from "@emotion/styled";

type FlexDirectionType = "row" | "col" | "row-reverse" | "col-reverse";
type JustifyContentType =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";
type AlignItemsType = "start" | "end" | "center" | "baseline" | "stretch";

const getFlexDirection = (flex?: FlexDirectionType) => {
  if (flex === "row") return "row";
  if (flex === "col") return "column";
  if (flex === "row-reverse") return "row-reverse";
  if (flex === "col-reverse") return "column-reverse";
};

const getJustifyContent = (justify?: JustifyContentType) => {
  if (justify === "start") return "flex-start";
  if (justify === "end") return "flex-end";
  if (justify === "center") return "center";
  if (justify === "between") return "space-between";
  if (justify === "around") return "space-around";
  if (justify === "evenly") return "space-evenly";
};

const getAlignItems = (items?: AlignItemsType) => {
  if (items === "baseline") return "baseline";
  if (items === "center") return "center";
  if (items === "end") return "flex-end";
  if (items === "start") return "flex-start";
  if (items === "stretch") return "stretch";
};

interface ContainerProps {
  flex?: FlexDirectionType;
  justify?: JustifyContentType;
  items?: AlignItemsType;
  gap?: string;
  padding?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;

  flex-direction: ${({ flex }) => getFlexDirection(flex)};
  justify-content: ${({ justify }) => getJustifyContent(justify)};
  align-items: ${({ items }) => getAlignItems(items)};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
`;

interface Props {
  children?: React.ReactNode;
  flex?: FlexDirectionType;
  justify?: JustifyContentType;
  items?: AlignItemsType;
  gap?: string;
  padding?: string;
}

const Flexbox: React.FC<Props> = ({
  children,
  flex = "row",
  justify = "center",
  items = "center",
  gap,
  padding,
}) => {
  return (
    <Container
      flex={flex}
      justify={justify}
      items={items}
      gap={gap}
      padding={padding}
    >
      {children}
    </Container>
  );
};

export default Flexbox;
