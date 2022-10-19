import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@styles/theme';

const Base = styled.section`
  width: 100%;

  @media screen and (min-width: ${theme.media.desktop}) {
    width: ${theme.media.desktop};
    margin: 0 auto;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <Base>{children}</Base>;
};

export default Layout;
