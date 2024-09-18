import Layout from "./Layout";
import { screen } from "@testing-library/react";
import { renderWithContext } from "../../tests/testingUtils/renderWithContext";
import mockRouter from "next-router-mock";

vi.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

describe("Layout tests", () => {
  it("Layout component renders search form, toggle theme button and child components", () => {
    renderWithContext(
      <Layout>
        <div>Test div</div>
      </Layout>,
    );

    const searchLink = screen.getByText(`Search`);
    const inputElement = screen.getByPlaceholderText(
      "Search for characters in Star trek API",
    );
    const toggleThemeButton = screen.getByRole("checkbox");
    const childComponent = screen.getByText(`Test div`);

    expect(searchLink).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(toggleThemeButton).toBeInTheDocument();
    expect(childComponent).toBeInTheDocument();
  });
});
