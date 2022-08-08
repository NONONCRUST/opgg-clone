import { Global } from "@emotion/react";
import { css } from "@emotion/react";
import emotionReset from "emotion-reset";

const global = css`
  ${emotionReset}

  html {
    font-family: "Roboto", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`;

const GlobalStyle = () => <Global styles={global} />;

export default GlobalStyle;
