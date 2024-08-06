import "../styles/index.css";
import { ThemeProvider } from "../contexts/ThemeContext.tsx";
import { Provider } from "react-redux";
import store from "../store/store.ts";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ErrorBoundary, Layout, LoadingSpinner } from "../components/index.tsx";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading] = useState(false);

  return (
    <ThemeProvider>
      <Provider store={store}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="description" content="RSSchool React" />
          <link
            rel="icon"
            href="/icon.svg"
            type="image/svg+xml"
            sizes="32x32"
          />
          <title>RSSchool React 2024</title>
        </Head>
        <ErrorBoundary>
          <Layout>
            {isLoading ? (
              <LoadingSpinner></LoadingSpinner>
            ) : (
              <Component {...pageProps} />
            )}
          </Layout>
        </ErrorBoundary>
      </Provider>
    </ThemeProvider>
  );
}
