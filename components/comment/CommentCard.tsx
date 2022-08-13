import React from "react";
import styled from "@emotion/styled";
import { gray } from "../../styles/palette";
import { theme } from "../../styles/theme";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${gray[100]};
  padding: 1rem;
`;

interface Props {}

const CommentCard: React.FC<Props> = () => {
  return (
    <Container>
      <Flexbox justify="start" gap="0.5rem">
        <Typography size={theme.fontSize.caption3} weight={600}>
          닉네임
        </Typography>
        <Typography size={theme.fontSize.caption3} color={gray[500]}>
          3일 전
        </Typography>
        <Typography size={theme.fontSize.caption3} color={gray[500]}>
          버전: 12.15
        </Typography>
      </Flexbox>
      <Typography size={theme.fontSize.caption3}>
        아트 약코가 많은 이유가 아트록스는 무지성 찍먹충이 쓰기 쉬운 챔프가
        아니라 그럼. 반대로 숙력도가 쌓이면 쌓일수록 개사기가 될수있음.
      </Typography>
    </Container>
  );
};

export default CommentCard;
