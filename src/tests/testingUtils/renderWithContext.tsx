import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { ThemeProvider } from "../../contexts/ThemeContext";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export const renderWithContext = (
  element: ReactNode,
  { route = "/", path = "/" } = {},
) => {
  return render(
    <Provider store={store}>
      <ThemeProvider>
        <MemoryRouter initialEntries={[route]}>
          <Routes>
            <Route path={path} element={element} />
          </Routes>
        </MemoryRouter>
      </ThemeProvider>
    </Provider>,
  );
};
