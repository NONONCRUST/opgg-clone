import React from "react";
import styled from "@emotion/styled";
import { blue, gray } from "@styles/palette";
import { theme } from "@styles/theme";
import { css } from "@emotion/react";

interface ContainerProps {
  active: boolean;
}

const Container = styled.label<ContainerProps>`
  position: relative;

  display: block;
  width: 32px;
  height: 12px;
  background-color: ${gray[300]};
  border-radius: 0.5rem;
  cursor: pointer;

  .toggle-button-input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch {
    position: absolute;

    width: 1rem;
    height: 1rem;
    top: -2px;
    left: 0;
    border-radius: 50%;
    background-color: white;
    box-shadow: ${theme.elevation1};
    transition: 0.2s;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${blue[200]};
      .switch {
        background-color: ${theme.primary};
        transform: translateX(1rem);
      }
    `}
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  active: boolean;
}

const ToggleButton: React.FC<Props> = ({ active, ...props }) => {
  return (
    <Container active={active}>
      <input
        className="toggle-button-input"
        type="checkbox"
        checked={active}
        readOnly
        {...props}
      />
      <span className="switch" />
    </Container>
  );
};

export default React.memo(ToggleButton);
