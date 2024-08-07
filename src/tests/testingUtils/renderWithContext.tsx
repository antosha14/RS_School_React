import { ReactElement } from "react";
import { render } from "@testing-library/react";
import StoreProvider from "../../store/StoreProvider";
import { ThemeProvider } from "../../contexts/ThemeContext";

export const renderWithContext = (element: ReactElement) => {
  return render(
    <StoreProvider>
      <ThemeProvider>{element}</ThemeProvider>
    </StoreProvider>,
  );
};
