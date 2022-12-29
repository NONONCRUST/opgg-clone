import React from 'react';
import styled from '@emotion/styled';
import { theme } from '@lib/styles/theme';
import TabButton from '@components/common/TabButton';
import Layout from '@components/layouts/Layout';
import Typography from '@components/common/Typography';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Container = styled.div`
  padding: 0 1rem;

  .tab-list {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    padding: 0.5rem 0;
  }

  @media screen and (min-width: ${theme.media.desktop}) {
    padding: 0;
  }
`;

interface Props {
  activeTab: 'general' | 'ingame';
  setActiveTab: React.Dispatch<React.SetStateAction<'general' | 'ingame'>>;
  isIngame: boolean;
}

const SummonerContentTab: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  isIngame,
}) => {
  return (
    <Layout>
      <Container>
        <ul className="tab-list">
          <TabButton
            type="general"
            active={activeTab === 'general'}
            onClick={() => setActiveTab('general')}
          >
            종합
          </TabButton>
          <TabButton
            type="ingame"
            active={activeTab === 'ingame'}
            onClick={() => setActiveTab('ingame')}
          >
            인게임 정보
          </TabButton>
          {isIngame && (
            <>
              <MdKeyboardArrowLeft size="20px" />
              <Typography size="0.875rem" weight={600} color={theme.primary}>
                현재 게임중!
              </Typography>
            </>
          )}
        </ul>
      </Container>
    </Layout>
  );
};

export default SummonerContentTab;
