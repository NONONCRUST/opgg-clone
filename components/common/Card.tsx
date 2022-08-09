import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import palette from "../../styles/palette";

interface ContainerProps {
  width?: string;
  height?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 0.25rem;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  ${({ theme }) =>
    theme.mode === "dark" &&
    css`
      background-color: ${palette.gray[700]};
    `}
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}

const Card: React.FC<Props> = ({
  children,
  width = "100%",
  height,
  ...props
}) => {
  return (
    <Container width={width} height={height} {...props}>
      {children}
    </Container>
  );
};

export default Card;
