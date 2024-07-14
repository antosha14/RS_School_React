import NavigationBar from "./NavigationBar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("NavigationBar", () => {
  it("renders navigation links based on depth", () => {
    render(
      <MemoryRouter initialEntries={["/?page=2"]}>
        <NavigationBar depth={5} />
      </MemoryRouter>,
    );

    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(`${i}`)).toBeInTheDocument();
    }
  });

  it("highlights the active page", () => {
    render(
      <MemoryRouter initialEntries={["/?page=3"]}>
        <NavigationBar depth={5} />
      </MemoryRouter>,
    );

    expect(screen.getByText("3")).toHaveClass("active");
  });
});
