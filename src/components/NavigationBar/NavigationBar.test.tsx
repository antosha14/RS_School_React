import NavigationBar from "./NavigationBar";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import mockRouter from "next-router-mock";

vi.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
  useSearchParams: vi.fn(() => {
    return new URLSearchParams({
      currentQuery: "",
      currentPage: "3",
      currentDetails: "",
    });
  }),
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
    mockRouter.setCurrentUrl("/?query=&page=1");
    render(<NavigationBar depth={5} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("1")).toHaveClass(/(.*?)active(.*?)/i);
  });
});
