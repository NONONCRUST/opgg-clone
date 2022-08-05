import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const global = css`
  ${emotionReset}

  html {
    font-family: "Noto Sans KR";
  }

  * {
    box-sizing: border-box;
  }
`;
