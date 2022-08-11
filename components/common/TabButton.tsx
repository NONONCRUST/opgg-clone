import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import palette from "../../styles/palette";

type TabButtonType = "general" | "ingame";

const getTabButtonType = (type: TabButtonType, active: boolean) => {
  switch (type) {
    case "general":
      return css`
        color: ${active && palette.blue[500]};
        background-color: ${active && palette.blue[50]};
      `;
    case "ingame":
      return css`
        color: ${palette.teal[500]};
        background: ${active && palette.teal[50]};
      `;
  }
};

interface ContainerProps {
  active: boolean;
  type: TabButtonType;
  width: string;
  height: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  cursor: pointer;
  background-color: white;

  border-radius: 0.25rem;
  font-size: 0.875rem;

  ${({ active }) =>
    !active &&
    css`
      &:hover {
        background-color: ${palette.gray[50]};
      }
    `}

  ${({ active }) =>
    active &&
    css`
      font-weight: 600;
    `}

  ${({ type, active }) => getTabButtonType(type, active)};
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  active: boolean;
  type?: TabButtonType;
  width?: string;
  height?: string;
}

const TabButton: React.FC<Props> = ({
  children,
  active,
  type = "general",
  width = "6rem",
  height = "2.5rem",
  ...props
}) => {
  return (
    <Container
      active={active}
      type={type}
      {...props}
      width={width}
      height={height}
      role="tab"
    >
      {children}
    </Container>
  );
};

export default TabButton;
