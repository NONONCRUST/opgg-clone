import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { wrapper } from '@store/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from '@components/layouts/Header';
import { ThemeProvider } from '@emotion/react';
import { lightTheme, darkTheme } from '@lib/styles/theme';
import useDarkMode from '@hooks/useDarkMode';
import GlobalStyle from '@lib/styles/GlobalStyle';
import useRouteProgressBar from '@hooks/useRouteProgressBar';
import '../lib/styles/nprogress.css';

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  console.log(metric);
};

const App = ({ Component, pageProps }: AppProps) => {
  useRouteProgressBar();

  const { isDarkMode } = useDarkMode();

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
