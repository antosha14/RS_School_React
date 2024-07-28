import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

const ThrowError = ({ message }: { message: string }) => {
  throw new Error(message);
};

describe("ErrorBoundary tests", () => {
  it("Renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <div>Test Child</div>
      </ErrorBoundary>,
    );

    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });

  it("Renders error message when child component throws an error", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <ThrowError message="Test Error" />
        </ErrorBoundary>
      </MemoryRouter>,
    );

    expect(screen.getByText("An error occurred!")).toBeInTheDocument();
    expect(screen.getByText("Unknown error has happened")).toBeInTheDocument();

    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy.mock.calls[0][0]).toContain("Test Error");
  });
});
