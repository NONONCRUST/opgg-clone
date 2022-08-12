import styled from "@emotion/styled";
import React from "react";
import { red } from "../styles/palette";
import { theme } from "../styles/theme";
import Typography from "./common/Typography";

const diameter = 2 * Math.PI * 40;

const Container = styled.div`
  position: relative;

  width: 88px;
  height: 88px;

  .animated-circle {
    animation: circle-fill-animation 2s ease;

    @keyframes circle-fill-animation {
      0% {
        stroke-dasharray: 0 ${diameter};
      }
    }
  }

  .donut-chart-text {
    position: absolute;
    top: 42%;
    right: 35%;
    font-weight: 500;
    color: ${theme.primary};
  }
`;

interface Props {
  percentage: number;
}

const DonutChart: React.FC<Props> = ({ percentage }) => {
  return (
    <Container>
      <svg viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={red[500]}
          strokeWidth="15"
        />
        <circle
          className="animated-circle"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke={theme.primary}
          strokeWidth="15"
          strokeDasharray={`${(diameter * percentage) / 100} ${
            (diameter * (100 - percentage)) / 100
          }`}
          strokeDashoffset={diameter * 0.25}
        />
      </svg>
      <Typography className="donut-chart-text" size="0.875rem">
        {percentage}%
      </Typography>
    </Container>
  );
};

export default DonutChart;
