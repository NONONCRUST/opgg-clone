import React from 'react';
import styled from '@emotion/styled';
import { MdInfoOutline } from 'react-icons/md';
import { gray } from '@styles/palette';
import Divider from '@components/common/Divider';
import Typography from '@components/common/Typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 2rem;
  background-color: ${gray[100]};
  color: ${gray[300]};
`;

const CommentNotFound: React.FC = () => {
  return (
    <>
      <Divider />
      <Container>
        <MdInfoOutline size="3rem" />
        <Typography>등록된 운영 팁이 없습니다.</Typography>
      </Container>
    </>
  );
};

export default CommentNotFound;
