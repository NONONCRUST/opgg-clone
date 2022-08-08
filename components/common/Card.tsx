import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  width?: string;
  height?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: white;
  border-radius: 0.25rem;

  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

interface Props {
  children?: React.ReactNode;
  width?: string;
  height?: string;
}

const Card: React.FC<Props> = ({ children, width = "100%", height }) => {
  return (
    <Container width={width} height={height}>
      {children}
    </Container>
  );
};

export default Card;
