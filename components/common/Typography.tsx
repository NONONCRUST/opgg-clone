import React from "react";
import styled from "@emotion/styled";

interface ContainerProps {
  size?: string;
  color?: string;
  weight?: number;
  underline?: boolean;
}

const Container = styled.p<ContainerProps>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  font-weight: ${({ weight }) => weight};
  text-decoration: ${({ underline }) => underline && "underline"};
`;

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  size?: string;
  color?: string;
  weight?: number;
  underline?: boolean;
}

const Typography: React.FC<Props> = ({
  children,
  size,
  color,
  weight,
  underline,
  ...props
}) => {
  return (
    <Container
      size={size}
      color={color}
      underline={underline}
      weight={weight}
      {...props}
    >
      {children}
    </Container>
  );
};

export default Typography;
