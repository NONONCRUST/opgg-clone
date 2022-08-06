import styled from "@emotion/styled";
import React from "react";
import palette from "../../../styles/palette";

const Container = styled.li`
  display: flex;
  justify-content: flex-start;

  padding: 0.75rem;

  &:hover {
    background-color: ${palette.gray[100]};
  }
`;

interface Props extends React.LiHTMLAttributes<HTMLLIElement> {
  label: string;
}

const DropdownMenuItem: React.FC<Props> = ({ label = "메뉴", ...props }) => {
  return <Container {...props}>{label}</Container>;
};

export default DropdownMenuItem;
