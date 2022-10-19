import React from 'react';
import styled from '@emotion/styled';
import { gray } from '@styles/palette';
import { theme } from '@styles/theme';
import Typography from '@components/common/Typography';
import Flexbox from '@components/layouts/Flexbox';
import { parseDateRelative } from '@lib/utils';
import Divider from '@components/common/Divider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${gray[100]};
  padding: 1rem;
`;

interface Props {
  commentData: CommentType;
}

const CommentCard: React.FC<Props> = ({ commentData }) => {
  return (
    <>
      <Divider />
      <Container>
        <Flexbox justify="start" gap="0.5rem">
          <Typography size={theme.fontSize.caption3} weight={600}>
            {commentData.name}
          </Typography>
          <Typography size={theme.fontSize.caption3} color={gray[500]}>
            {parseDateRelative(commentData.createdAt)}
          </Typography>
          <Typography size={theme.fontSize.caption3} color={gray[500]}>
            버전: {commentData.version}
          </Typography>
        </Flexbox>
        <Typography
          size={theme.fontSize.caption3}
          style={{ whiteSpace: 'pre', lineHeight: '16px' }}
        >
          {commentData.contents}
        </Typography>
      </Container>
    </>
  );
};

export default CommentCard;
