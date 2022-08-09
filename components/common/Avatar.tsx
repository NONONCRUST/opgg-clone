import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";

const getAvatarShape = (shape?: "rounded" | "boxier") => {
  switch (shape) {
    case "rounded":
      return css`
        border-radius: 50%;

        .image {
          border-radius: 50%;
        }
      `;
    case "boxier":
      return css`
        border-radius: 0.25rem;

        .image {
          border-radius: 0.25rem;
        }
      `;
  }
};

interface ContainerProps {
  size?: string;
  shape: "rounded" | "boxier";
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${palette.gray[100]};

  width: ${({ size }) => size};
  height: ${({ size }) => size};

  .image {
    width: 100%;
    height: 100%;
  }

  ${({ shape }) => getAvatarShape(shape)};
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: string;
  shape?: "rounded" | "boxier";
}

const Avatar: React.FC<Props> = ({
  src,
  alt = "image",
  size = "2rem",
  shape = "rounded",
  ...props
}) => {
  return (
    <Container size={size} shape={shape} {...props}>
      {src && <img className="image" src={src} alt={alt} />}
    </Container>
  );
};

export default Avatar;
