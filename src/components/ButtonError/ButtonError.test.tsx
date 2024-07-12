import ButtonError from "./ButtonError";
import { render, screen } from "@testing-library/react";

describe("Button Error tests", () => {
  it("is rendered on the screen with needed text", () => {
    render(<ButtonError />);
    const buttonElement = screen.getByText("Crash the app");
    expect(buttonElement).toBeInTheDocument();
  });
});
