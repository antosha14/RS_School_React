import Header from "./Header";
import { screen } from "@testing-library/react";
import { renderWithContext } from "../../tests/testingUtils/renderWithContext";
import mockRouter from "next-router-mock";

vi.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
}));

describe("Header tests", () => {
  it("The header component renders search form and toggle theme button", () => {
    renderWithContext(<Header />);

    const searchLink = screen.getByText(`Search`);
    const inputElement = screen.getByPlaceholderText(
      "Search for characters in Star trek API",
    );
    const toggleThemeButton = screen.getByRole("checkbox");

    expect(searchLink).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
    expect(toggleThemeButton).toBeInTheDocument();
  });
});
