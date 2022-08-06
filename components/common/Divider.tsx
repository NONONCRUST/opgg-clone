import React from "react";
import styled from "@emotion/styled";
import palette from "../../styles/palette";

const Container = styled.div`
  border-bottom: 1px solid ${palette.gray[300]};
`;

const Divider: React.FC = () => {
  return <Container />;
};

export default Divider;
