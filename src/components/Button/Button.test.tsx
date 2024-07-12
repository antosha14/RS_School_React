import Button from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("Is rendered on the screen with Search text", () => {
    render(<Button />);
    const buttonElement = screen.getByText("Search");
    expect(buttonElement).toBeInTheDocument();
  });
});
