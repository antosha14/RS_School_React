import LoadingSpinner from "./LoadingSpinner";
import { screen } from "@testing-library/react";
import { renderWithContext } from "../../tests/testingUtils/renderWithContext";
import mockRouter from "next-router-mock";

vi.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

describe("Loader tests", () => {
  it("Loader is displayed on the page", () => {
    renderWithContext(<LoadingSpinner />);
    const loader = screen.getByTestId(`loader`);
    expect(loader).toBeInTheDocument();
  });
});
