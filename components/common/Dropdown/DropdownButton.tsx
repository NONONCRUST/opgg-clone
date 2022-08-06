import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import palette from "../../../styles/palette";
import { MdArrowDropDown } from "react-icons/md";

type DropdownButtonSizeType = "small" | "medium" | "large";

const getDropdownButtonSize = (size?: DropdownButtonSizeType) => {
  switch (size) {
    case "small":
      return css`
        height: 2rem;
        padding: 0.75rem;
        font-size: 0.75rem;
        min-width: 4rem;
      `;
    case "medium":
      return css`
        height: 2.5rem;
        padding: 0.75rem;
        font-size: 0.875rem;
        min-width: 5rem;
      `;
    case "large":
      return css`
        height: 3rem;
        padding: 0.75rem;
        font-size: 1rem;
        min-width: 6rem;
      `;
  }
};

interface ContainerProps {
  size?: DropdownButtonSizeType;
  open?: boolean;
}

const Container = styled.button<ContainerProps>`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  font-weight: 500;
  border-radius: 0.25rem;
  border: 1px solid ${palette.gray[300]};
  background-color: white;

  cursor: pointer;

  ${({ size }) => getDropdownButtonSize(size)};

  ${({ open }) =>
    open &&
    css`
      .arrow-dropdown-icon {
        transform: rotate(180deg);
      }
    `}
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  label?: string;
  open?: boolean;
  size?: DropdownButtonSizeType;
}

const DropdownButton: React.FC<Props> = ({
  children,
  label = "메뉴",
  open,
  size = "medium",
  ...props
}) => {
  return (
    <Container size={size} open={open} {...props}>
      {label}
      <MdArrowDropDown
        className="arrow-dropdown-icon"
        size="1.25rem"
        color={palette.gray[500]}
      />
      {open && children}
    </Container>
  );
};

export default DropdownButton;
