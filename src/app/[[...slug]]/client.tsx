"use client";

import { Provider } from "react-redux";
import store from "../../store/store.ts";
import { ThemeProvider } from "../../store/ThemeContext";

import React from "react";
import dynamic from "next/dynamic";

const App = dynamic(() => import("../../App.tsx"), { ssr: false });

export function ClientOnly() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  );
}
