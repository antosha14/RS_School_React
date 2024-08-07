import NavigationBar from "./NavigationBar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import mockRouter from "next-router-mock";

vi.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

describe("NavigationBar", () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

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
    mockRouter.setCurrentUrl("/?query=&page=3");
    render(<NavigationBar depth={5} />);

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("3")).toHaveClass(/(.*?)active(.*?)/i);
  });
});
