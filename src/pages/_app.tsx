import "../styles/index.css";
import { ThemeProvider } from "../contexts/ThemeContext.tsx";
import { Provider } from "react-redux";
import store from "../store/store.ts";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ErrorBoundary, Layout, LoadingSpinner } from "../components/index.tsx";
import { useState, useEffect } from "react";
import classNames from "../styles/MainPage.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
    };

    const handleRouteChangeEnd = () => {
      setIsLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router]);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="RSSchool React" />
          <link
            rel="icon"
            href="../public/icon.svg"
            type="image/svg+xml"
            sizes="32x32"
          />
          <title>RSSchool React 2024</title>
        </Head>
        <ErrorBoundary>
          <Layout>
            {isLoading ? (
              <div className={classNames.mainContainerLight}>
                <LoadingSpinner></LoadingSpinner>
              </div>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  );
}
