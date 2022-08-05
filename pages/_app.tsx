import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { global } from "../styles/global";
import { wrapper } from "../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/layouts/Header";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={global} />
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(App);
