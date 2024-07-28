import { render, screen } from "@testing-library/react";
import App from "../App";
import { userEvent } from "@testing-library/user-event";
import { ThemeProvider } from "../store/ThemeContext";
import { Provider } from "react-redux";
import store from "../store/store";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { PageNotFoundPage } from "../views";

describe("App tests", () => {
  it("Clicking the Search button saves the entered value to the local storage", async () => {
    render(
      <ThemeProvider>
        <Provider store={store}>
          <App></App>
        </Provider>
      </ThemeProvider>,
    );
    const searchLink = screen.getByText(`Search`);
    const inputElement = screen.getByPlaceholderText(
      "Search for characters in Star trek API",
    );

    const user = userEvent.setup();
    await user.type(inputElement, "Anton");
    await user.click(searchLink);

    const curQuery = localStorage.getItem("prevQuery");
    expect(curQuery).toBe("Anton");
  });

  it("Clicking the Search button saves the entered value to the local storage", async () => {
    localStorage.setItem("prevQuery", "Value for test");
    render(
      <ThemeProvider>
        <Provider store={store}>
          <App></App>
        </Provider>
      </ThemeProvider>,
    );
    const inputElement: HTMLInputElement = screen.getByPlaceholderText(
      "Search for characters in Star trek API",
    );
    expect(inputElement.value).toBe("Value for test");
  });

  it("Page not found renders for unknown routes", async () => {
    vi.mock("react-router-dom", async () => {
      const actual = await vi.importActual("react-router-dom");
      return {
        ...actual,
        useRouteError: vi.fn(() => ({
          statusText: "Not Found",
          message: "Page not found",
        })),
      };
    });
    render(
      <ThemeProvider>
        <Provider store={store}>
          <MemoryRouter initialEntries={["/unknown"]}>
            <Routes>
              <Route path="*" element={<PageNotFoundPage />} />
            </Routes>
          </MemoryRouter>
        </Provider>
      </ThemeProvider>,
    );
    expect(screen.getByText("An error occurred!")).toBeInTheDocument();
    expect(screen.getByText("404 Page Not Found")).toBeInTheDocument();
    expect(screen.getByText("Go to main page")).toBeInTheDocument();
  });
});
