import { screen } from "@testing-library/react";
import { renderWithContext } from "../../tests/testingUtils/renderWithContext";
import userEvent from "@testing-library/user-event";
import DetailedCard from "../DetailedCard/DetailedCard";

const mockedCardData = {
  cardData: {
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
  },
  key: "CHMA0000215045",
  index: 0,
  uid: "CHMA0000215045",
};

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: vi.fn(),
    useSearchParams: vi.fn(),
    useNavigate: vi.fn(),
  };
});

import {
  useOutletContext,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

describe("Detailed Card tests", () => {
  const setup = (character = mockedCardData.cardData) => {
    vi.mocked(useOutletContext).mockReturnValue({ character });
    vi.mocked(useSearchParams).mockReturnValue([
      new URLSearchParams(),
      vi.fn(),
    ]);
    const mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);

    return {
      user: userEvent.setup(),
      mockNavigate,
    };
  };

  it("The Detailed card component renders the relevant card data", () => {
    setup();
    renderWithContext(<DetailedCard />, {
      route: `/details/${mockedCardData.cardData.uid}`,
      path: `/details/:uid`,
    });

    const nameData = screen.getByText("Name: 0413 Theta");
    expect(nameData).toBeInTheDocument();

    const birthData = screen.getByText("Birth year: test birth");
    expect(birthData).toBeInTheDocument();

    const placeOfBirth = screen.getByText("Birth place: test place");
    expect(placeOfBirth).toBeInTheDocument();
  });

  it("Clicking the close button hides detailed component", async () => {
    const { user } = setup();
    renderWithContext(<DetailedCard />, {
      route: `/details/${mockedCardData.cardData.uid}`,
      path: `/details/:uid`,
    });

    const closeButton = screen.getByRole("link");
    expect(closeButton).toBeInTheDocument();

    await user.click(closeButton);

    expect(closeButton).toHaveAttribute("href", "/?query=&page=1");
  });

  it("Navigates back when clicking outside the card", async () => {
    const { user, mockNavigate } = setup();
    renderWithContext(<DetailedCard />, {
      route: `/details/${mockedCardData.cardData.uid}`,
      path: `/details/:uid`,
    });

    const appWrapper = screen.getByTestId("app-wrapper");
    await user.click(appWrapper);

    expect(mockNavigate).toHaveBeenCalledWith("/?query=&page=1");
  });
});
