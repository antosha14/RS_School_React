import "../index.css";
import { Provider } from "react-redux";
import store from "../store/store.ts";
import { ThemeProvider } from "../store/ThemeContext";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}
