import App from "../App";
import { render, screen } from "@testing-library/react";

describe("Integration tests for whole App", () => {
  it("", () => {
    render(<App />);
    const buttonElement = screen.getByText("Search");
    expect(buttonElement).toBeInTheDocument();
  });
});
