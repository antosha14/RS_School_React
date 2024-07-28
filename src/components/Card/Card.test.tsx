import Card from "./Card";
import { screen } from "@testing-library/react";
import { renderWithContext } from "../../tests/testingUtils/renderWithContext";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router-dom";
import DetailedCard from "../DetailedCard/DetailedCard";

const mockedCardData = {
  cardData: {
    uid: "CHMA0000215045",
    name: "0413 Theta",
    gender: null,
    yearOfBirth: 2000,
    monthOfBirth: null,
    dayOfBirth: null,
    placeOfBirth: null,
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

import {
  useOutletContext,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useOutletContext: vi.fn(),
    useSearchParams: vi.fn(),
    useNavigate: vi.fn(),
  };
});

describe("Card tests", () => {
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

  it("The card component renders the relevant card data", () => {
    setup();
    renderWithContext(
      <Card
        cardData={mockedCardData.cardData}
        key={mockedCardData.uid}
        index={mockedCardData.index + 1}
        uid={mockedCardData.uid}
      />,
    );
    const cardElement = screen.getByText(`1. 0413 Theta`);
    const learnMoreLink = screen.getByText(`Learn more →`);
    expect(cardElement).toBeInTheDocument();
    expect(learnMoreLink).toBeInTheDocument();
  });

  it("Link for right UID is in the document", async () => {
    setup();
    renderWithContext(
      <Card
        cardData={mockedCardData.cardData}
        key={mockedCardData.uid}
        index={mockedCardData.index + 1}
        uid={mockedCardData.uid}
      />,
    );
    const learnMoreLink = screen.getByRole("link", { name: `Learn more →` });
    expect(learnMoreLink).toHaveAttribute(
      "href",
      "/details/CHMA0000215045?query=&page=1",
    );
  });

  it("Clicking on a learn more opens a detailed card component", async () => {
    setup();
    renderWithContext(
      <Routes>
        <Route
          path="/"
          element={
            <Card
              cardData={mockedCardData.cardData}
              key={mockedCardData.uid}
              index={mockedCardData.index + 1}
              uid={mockedCardData.uid}
            />
          }
        />{" "}
        <Route path="/details/:uid" element={<DetailedCard />} />
      </Routes>,
      {
        route: `/`,
        path: `*`,
      },
    );
    const learnMoreLink = await screen.findByText(`Learn more →`);
    expect(learnMoreLink).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(learnMoreLink);

    const birthYear = await screen.findByText(
      `Birth year: ${mockedCardData.cardData.yearOfBirth}`,
    );
    expect(birthYear).toBeInTheDocument();
  });
});
