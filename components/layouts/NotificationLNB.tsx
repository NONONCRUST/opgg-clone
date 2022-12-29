import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@lib/styles/theme';

interface BaseProps {
  backgroundColor: string;
}

const Base = styled.div<BaseProps>`
  display: flex;
  align-items: center;

  height: 3rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: 0.875rem;

  .contents {
    display: flex;
    width: 100%;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .contents {
      margin: 0 auto;
      max-width: ${theme.media.desktop};
    }
  }
`;

interface Props {
  contents: string;
  backgroundColor: string;
}

const NotificationLNB: React.FC<Props> = ({ contents, backgroundColor }) => {
  return (
    <Base backgroundColor={backgroundColor}>
      <div className="contents">{contents}</div>
    </Base>
  );
};

export default NotificationLNB;
