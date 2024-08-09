import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorComponent from "../app/error";

const mockError = new Error("Test error");
const mockReset = vi.fn();

describe("ErrorBoundary tests", () => {
  it("Renders error message when child component throws an error", () => {
    render(
      <MemoryRouter>
        <ErrorComponent error={mockError} reset={mockReset}></ErrorComponent>
      </MemoryRouter>,
    );

    expect(screen.getByText("An error occurred!")).toBeInTheDocument();
    expect(screen.getByText("Unknown error has happened")).toBeInTheDocument();
  });
});
