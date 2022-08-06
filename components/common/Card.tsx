import styled from "@emotion/styled";
import React from "react";

const Container = styled.div``;

interface Props {
  children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
