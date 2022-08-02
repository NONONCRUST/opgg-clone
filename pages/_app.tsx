import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { global } from "../styles/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global styles={global} />
      <Component {...pageProps} />
    </>
  );
};

export default App;
