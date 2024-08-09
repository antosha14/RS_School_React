import RootLayout from "../app/layout";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";

vi.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
  useSearchParams: vi.fn(() => {
    return new URLSearchParams({
      currentQuery: "",
      currentPage: "1",
      currentDetails: "",
    });
  }),
}));

describe("Layout tests", () => {
  it("Layout displays children correctly", async () => {
    render(
      <RootLayout>
        <div>Test text</div>
      </RootLayout>,
    );

    expect(screen.getByText("Test text")).toBeInTheDocument();
  });
});
