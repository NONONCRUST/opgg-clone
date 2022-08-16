import styled from "@emotion/styled";
import React from "react";

const Container = styled.div``;

interface Props {
  children: React.ReactNode;
}

const Chip: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default React.memo(Chip);
