import type { AppProps } from "next/app";
import { wrapper } from "../store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/layouts/Header";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../styles/theme";
import useDarkMode from "../hooks/useDarkMode";
import GlobalStyle from "../styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  const { isDarkMode } = useDarkMode();
  console.log("asdasd");

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(App);
