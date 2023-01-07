import React from 'react';
import styled from '@emotion/styled';
import { usePathname } from 'next/navigation';
import { theme } from '@lib/styles/theme';
import HeaderMainInput from '@components/main-input/HeaderMainInput';
import NavigationBar from '@components/layouts/NavigationBar';

const Base = styled.div`
  display: flex;

  height: 3rem;
  background-color: ${theme.primary};

  .contents {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 1rem;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    .contents {
      margin: 0 auto;
      max-width: ${theme.media.desktop};
    }
  }
`;

const LNB: React.FC = () => {
  const pathname = usePathname();

  return (
    <Base>
      <div className="contents">
        <NavigationBar />
        {pathname !== '/' && <HeaderMainInput />}
      </div>
    </Base>
  );
};

export default LNB;
