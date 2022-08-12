import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { gray } from "../../styles/palette";

const getDividerOrientation = (orientation?: "horizontal" | "vertical") => {
  switch (orientation) {
    case "horizontal":
      return css`
        width: 100%;
        border-bottom: 1px solid ${gray[200]};
      `;
    case "vertical":
      return css`
        width: 1px;
        height: 100%;
        border-right: 1px solid ${gray[200]};
      `;
  }
};

interface ContainerProps {
  orientation?: "horizontal" | "vertical";
}

const Container = styled.hr<ContainerProps>`
  margin: 0;

  border: none;

  ${({ orientation }) => getDividerOrientation(orientation)};

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      border-bottom: 1px solid ${gray[900]};
    `}
`;

interface Props extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
}

const Divider: React.FC<Props> = ({ orientation = "horizontal", ...props }) => {
  return <Container {...props} orientation={orientation} />;
};

export default Divider;
