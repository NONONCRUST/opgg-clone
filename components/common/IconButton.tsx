import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { blue } from '@styles/palette';
import { theme } from '@styles/theme';

type IconButtonVariantType = 'contained' | 'outlined';

interface ContainerProps {
  variant: IconButtonVariantType;
}

const iconButtonVariantStyle = {
  contained: css`
    background-color: ${theme.primary};
    color: white;

    &:hover {
      background-color: ${theme.primaryVariant};
    }
  `,
  outlined: css`
    background-color: white;
    border: 1px solid ${theme.primary};
    color: ${theme.primary};

    &:hover {
      background-color: ${blue[50]};
    }
  `,
};

const Container = styled.button<ContainerProps>`
  padding: 0.5rem;

  ${({ variant }) => iconButtonVariantStyle[variant]};
`;

interface Props {
  children: React.ReactNode;
  variant?: 'contained' | 'outlined';
}

const IconButton: React.FC<Props> = ({ children, variant = 'contained' }) => {
  return <Container variant={variant}>{children}</Container>;
};

export default React.memo(IconButton);
