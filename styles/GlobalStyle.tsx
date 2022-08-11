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

  a {
    color: inherit;
    :visited {
      color: inherit;
    }
    text-decoration: none;
  }
`;

const GlobalStyle = () => <Global styles={global} />;

export default GlobalStyle;
