import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import palette from "../../../styles/palette";
import { MdArrowDropDown } from "react-icons/md";

type DropdownSizeType = "small" | "medium" | "large";

const getDropdownSize = (size?: DropdownSizeType) => {
  switch (size) {
    case "small":
      return css`
        height: 2rem;
        padding: 0.5rem 0.8rem;
        font-size: 0.75rem;
      `;
    case "medium":
      return css`
        height: 2.5rem;
        padding: 0.625rem 1rem;
        font-size: 0.875rem;
      `;
    case "large":
      return css`
        height: 3rem;
        padding: 0.75rem 1.2rem;
        font-size: 1rem;
      `;
  }
};

interface ContainerProps {
  size?: DropdownSizeType;
  open?: boolean;
}

const Container = styled.button<ContainerProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  min-width: 4rem;
  font-weight: 500;
  border-radius: 0.25rem;
  border: 1px solid ${palette.gray[300]};
  background-color: white;

  cursor: pointer;

  ${({ size }) => getDropdownSize(size)};

  ${({ open }) =>
    open &&
    css`
      .arrow-dropdown-icon {
        transform: rotate(180deg);
      }
    `}
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  open: boolean;
  size?: DropdownSizeType;
}

const Dropdown: React.FC<Props> = ({
  label = "드랍다운",
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
    </Container>
  );
};

export default Dropdown;
