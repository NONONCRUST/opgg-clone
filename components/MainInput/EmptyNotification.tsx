import styled from "@emotion/styled";
import React from "react";
import { MdInfoOutline, MdStar } from "react-icons/md";
import palette from "../../styles/palette";
import Typography from "../common/Typography";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1rem;
  padding: 2rem;
`;

interface Props {
  type: "recent" | "favorite";
}

const EmptyNotification: React.FC<Props> = ({ type }) => {
  return (
    <Container>
      {type === "recent" && (
        <>
          <MdInfoOutline size="20px" color={palette.gray[400]} />
          <Typography size="0.75rem" color={palette.gray[400]}>
            최근에 본 소환사가 없습니다.
          </Typography>
        </>
      )}
      {type === "favorite" && (
        <>
          <MdStar size="20px" color={palette.yellow[400]} />
          <Typography size="0.75rem" color={palette.gray[400]}>
            관심있는 소환사에 즐겨찾기를 하여 편리하게 정보를 받아보세요.
          </Typography>
        </>
      )}
    </Container>
  );
};

export default EmptyNotification;
