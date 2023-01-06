import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { theme } from '@lib/styles/theme';
import DarkModeButton from '@components/DarkModeButton';
import Flexbox from '@components/layouts/Flexbox';
import Image from 'next/image';

const Base = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2.5rem;
  background-color: #29344e;
  padding-right: 1rem;

  color: white;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    padding: 0 1rem;
    font-weight: 600;
    color: white;
    cursor: pointer;
    background-color: ${theme.primary};
  }
`;

const GNB: React.FC = () => {
  return (
    <Base>
      <Link className="logo" href="/">
        <Image width={65} height={16} src="/opgglogo.svg" alt="opgg-logo" />
      </Link>
      <Flexbox gap="1rem">
        <DarkModeButton />
      </Flexbox>
    </Base>
  );
};

export default GNB;
