import React from "react";
import styled from "@emotion/styled";
import palette from "../../styles/palette";

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${palette.gray[200]};
`;

const Divider: React.FC = () => {
  return <Container />;
};

export default Divider;
