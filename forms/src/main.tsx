import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "@router/AppRouter";
import { ErrorBoundary } from "@components/ErrorBoundary/ErrorBoundary";
import { Provider } from "react-redux";
import { store } from "@store/store";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ErrorBoundary>
  </StrictMode>,
);
