import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import PageNotFoundPage from "./PageNotFoundPage";

vi.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

describe("Page not found tests", () => {
  it("Page not found renders for unknown routes", async () => {
    mockRouter.setCurrentUrl("/non-existent-page");

    render(<PageNotFoundPage />);

    expect(screen.getByText("An error occurred!")).toBeInTheDocument();
    expect(screen.getByText("404 Page Not Found")).toBeInTheDocument();
    expect(screen.getByText("Go to main page")).toBeInTheDocument();
  });
});
