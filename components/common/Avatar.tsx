import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import { gray } from '@lib/styles/palette';

const avatarShapeStyle = {
  rounded: css`
    border-radius: 50%;

    .image {
      border-radius: 50%;
    }
  `,
  boxier: css`
    border-radius: 0.25rem;

    .image {
      border-radius: 0.25rem;
    }
  `,
};

interface ContainerProps {
  size?: string;
  shape: 'rounded' | 'boxier';
}

const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${gray[100]};

  width: ${({ size }) => size};
  height: ${({ size }) => size};

  .image {
    width: 100%;
    height: 100%;
  }

  ${({ shape }) => avatarShapeStyle[shape]};
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: string;
  shape?: 'rounded' | 'boxier';
}

const Avatar: React.FC<Props> = ({
  src,
  alt = 'image',
  size = '36px',
  shape = 'rounded',
  ...props
}) => {
  return (
    <Container size={size} shape={shape} {...props}>
      {src && (
        <Image
          className="image"
          src={src}
          alt={alt}
          width={Number(size.slice(0, 2))}
          height={Number(size.slice(0, 2))}
        />
      )}
    </Container>
  );
};

export default React.memo(Avatar);
