import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@lib/styles/theme';
import MainInput from '@components/main-input/MainInput';
import HeadMeta from '@components/HeadMeta';
import Image from 'next/image';
import Flexbox from '@components/layouts/Flexbox';

const Base = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  background-color: ${theme.primary};
  min-height: 100vh;

  .main-logo {
    margin-top: 8rem;
  }
`;

const HomePage: React.FC = () => {
  return (
    <Base>
      <HeadMeta />
      <Flexbox padding="8rem 0 0 0">
        <Image
          className="main-logo"
          width={150}
          height={36}
          src="/opgglogo.svg"
          alt="opgg-logo"
        />
      </Flexbox>
      <MainInput />
    </Base>
  );
};

export default HomePage;
