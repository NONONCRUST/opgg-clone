import styled from "@emotion/styled";
import React from "react";
import palette from "../../styles/palette";

interface ContainerProps {
  size?: string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${palette.gray[100]};

  width: ${({ size }) => size};
  height: ${({ size }) => size};

  .image {
    width: 100%;
    height: 100%;
  }
`;

interface Props {
  src?: string;
  alt?: string;
  size?: string;
}

const Avatar: React.FC<Props> = ({ src, alt = "image", size = "2rem" }) => {
  return (
    <Container size={size}>
      {src && <img className="image" src={src} alt={alt} />}
    </Container>
  );
};

export default Avatar;
