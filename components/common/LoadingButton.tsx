import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { gray } from '@lib/styles/palette';

type LoadingButtonVariant = 'contained' | 'outlined';
type LoadingButtonRingSize = 'large';

const loadingButtonVariantStyle = {
  contained: css`
    color: ${gray[400]};
    background-color: ${gray[300]};
  `,
  outlined: css`
    color: ${gray[400]};
    background: none;
    border: 1px solid ${gray[300]};
  `,
};

const loadingButtonRingSizeStyle = {
  large: css`
    .lds-dual-ring:after {
      width: 2rem;
      height: 2rem;
    }
  `,
};

interface ContainerProps {
  variant: LoadingButtonVariant;
  width?: string;
  ringSize?: LoadingButtonRingSize;
}

const Container = styled.button<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${gray[400]};
  background-color: ${gray[300]};
  height: 2.5rem;
  padding: 0.625rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: none;
  transition: 0.2s ease;
  min-width: 4rem;

  width: ${({ width }) => width};

  ${({ variant }) => loadingButtonVariantStyle[variant]};

  .lds-dual-ring:after {
    content: ' ';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 2px solid ${gray[400]};
    border-color: ${gray[400]} ${gray[400]} transparent;
    animation: lds-dual-ring 1s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  ${({ ringSize }) => ringSize && loadingButtonRingSizeStyle[ringSize]};
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: LoadingButtonVariant;
  width?: string;
  ringSize?: LoadingButtonRingSize;
}

const LoadingButton: React.FC<Props> = ({
  variant = 'contained',
  width,
  ringSize,
  ...props
}) => {
  return (
    <Container variant={variant} width={width} ringSize={ringSize} {...props}>
      <div className="lds-dual-ring" />
    </Container>
  );
};

export default React.memo(LoadingButton);
