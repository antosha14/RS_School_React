import Card from "./Card";
import { screen } from "@testing-library/react";
import { renderWithContext } from "../../tests/testingUtils/renderWithContext";
import userEvent from "@testing-library/user-event";
import DetailedCard from "../DetailedCard/DetailedCard";
import mockRouter from "next-router-mock";

const mockedCardData = {
  cardData: {
    uid: "CHMA0000215045",
    name: "0413 Theta",
    gender: null,
    yearOfBirth: "2000",
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

vi.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

describe("Card tests", () => {
  afterAll(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("The card component renders the relevant card data", () => {
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
      "/?query=&page=1&details=CHMA0000215045",
    );
  });

  it("Clicking on a learn more opens a detailed card component", async () => {
    renderWithContext(
      <>
        <Card
          cardData={mockedCardData.cardData}
          key={mockedCardData.uid}
          index={mockedCardData.index + 1}
          uid={mockedCardData.uid}
        />
        <DetailedCard character={mockedCardData.cardData} />
      </>,
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
