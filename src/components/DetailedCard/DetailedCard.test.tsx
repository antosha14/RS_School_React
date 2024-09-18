import { screen } from "@testing-library/react";
import { renderWithContext } from "../../tests/testingUtils/renderWithContext";
import userEvent from "@testing-library/user-event";
import DetailedCard from "../DetailedCard/DetailedCard";
import mockRouter from "next-router-mock";

const mockedCardData = {
  uid: "CHMA0000215045",
  name: "0413 Theta",
  gender: "test gender",
  yearOfBirth: "test birth",
  monthOfBirth: null,
  dayOfBirth: null,
  placeOfBirth: "test place",
  yearOfDeath: null,
  monthOfDeath: null,
  dayOfDeath: null,
  placeOfDeath: null,
  height: null,
  weight: null,
  deceased: null,
  bloodType: null,
  maritalStatus: null,
  serialNumber: null,
  hologramActivationDate: null,
  hologramStatus: null,
  hologramDateStatus: null,
  hologram: false,
  fictionalCharacter: false,
  mirror: true,
  alternateReality: false,
};

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

describe("Detailed Card tests", () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("The Detailed card component renders the relevant card data", () => {
    renderWithContext(<DetailedCard character={mockedCardData} />);

    const nameData = screen.getByText("Name: 0413 Theta");
    expect(nameData).toBeInTheDocument();

    const birthData = screen.getByText("Birth year: test birth");
    expect(birthData).toBeInTheDocument();

    const placeOfBirth = screen.getByText("Birth place: test place");
    expect(placeOfBirth).toBeInTheDocument();
  });

  it("Clicking the close button hides detailed component", async () => {
    renderWithContext(<DetailedCard character={mockedCardData} />);

    const user = userEvent.setup();
    const closeButton = screen.getByRole("link");
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(closeButton).toHaveAttribute("href", "/?query=&page=1");
  });

  it("Navigates back when clicking outside the card", async () => {
    mockRouter.setCurrentUrl("/?query=&page=1");
    const user = userEvent.setup();

    renderWithContext(<DetailedCard character={mockedCardData} />);
    mockRouter.push = vi.fn();

    const appWrapper = screen.getByTestId("app-wrapper");
    await user.click(appWrapper);

    expect(mockRouter.push).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith("/?query=&page=1");
  });
});
