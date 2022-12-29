import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { gray } from '@lib/styles/palette';

type DividerOrientation = 'horizontal' | 'vertical';

const dividerOrientationStyle = {
  horizontal: css`
    width: 100%;
    border-bottom: 1px solid ${gray[200]};
  `,
  vertical: css`
    width: 1px;
    height: 100%;
    border-right: 1px solid ${gray[200]};
  `,
};

interface ContainerProps {
  orientation: DividerOrientation;
}

const Container = styled.hr<ContainerProps>`
  margin: 0;

  border: none;

  ${({ orientation }) => dividerOrientationStyle[orientation]};
`;

interface Props extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: DividerOrientation;
}

const Divider: React.FC<Props> = ({ orientation = 'horizontal', ...props }) => {
  return <Container {...props} orientation={orientation} />;
};

export default React.memo(Divider);
