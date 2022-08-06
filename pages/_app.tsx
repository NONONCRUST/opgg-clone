import type { AppProps } from "next/app";
import { wrapper } from "../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/layouts/Header";
import GlobalStyle from "../styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(App);
