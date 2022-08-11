import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import Divider from "../common/Divider";
import Typography from "../common/Typography";
import Flexbox from "../layouts/Flexbox";
import { theme } from "../../styles/theme";
import palette from "../../styles/palette";
import ChampionSearchDropdownItem from "./ChampionSearchDropdownItem";

const Container = styled.div`
  position: absolute;
  top: calc(100% + 0.2rem);
  width: 100%;
  height: 16rem;
  overflow: scroll;
  color: ${palette.gray[700]};

  background-color: white;
  box-shadow: ${theme.elevation4};

  border-radius: 0.25rem;

  z-index: 3;
`;

interface Props {
  children: React.ReactNode;
}

const ChampionSearchDropdown: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Flexbox justify="start" padding="0.75rem">
        <Typography size="0.875rem">챔피언 목록</Typography>
      </Flexbox>
      <Divider />
      <ChampionSearchDropdownItem type="all" />
      {children}
    </Container>
  );
};

export default ChampionSearchDropdown;
