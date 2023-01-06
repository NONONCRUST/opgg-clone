import { Router } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

const useRouteProgressBar = () => {
  useEffect(() => {
    NProgress.configure({
      showSpinner: false,
    });

    Router.events.on('routeChangeStart', () => {
      NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      NProgress.done(false);
    });
  }, []);
};

export default useRouteProgressBar;
