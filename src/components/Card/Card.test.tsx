import Card from "./Card";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const cardData = {
  cardData: {
    uid: "CHMA0000215045",
    name: "0413 Theta",
    gender: null,
    yearOfBirth: null,
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

describe("Card tests", () => {
  it("The card component renders the relevant card data", () => {
    render(
      <MemoryRouter initialEntries={["/?page=1"]}>
        <Card
          cardData={cardData.cardData}
          key={cardData.uid}
          index={cardData.index + 1}
          uid={cardData.uid}
        />
      </MemoryRouter>,
    );
    const cardElement = screen.getByText(`1. 0413 Theta`);
    const learnMoreLink = screen.getByText(`Learn more →`);
    expect(cardElement).toBeInTheDocument();
    expect(learnMoreLink).toBeInTheDocument();
  });

  it("Link for right UID is in the document", async () => {
    render(
      <MemoryRouter initialEntries={["/?page=1"]}>
        <Card
          cardData={cardData.cardData}
          key={cardData.uid}
          index={cardData.index + 1}
          uid={cardData.uid}
        />
      </MemoryRouter>,
    );
    const learnMoreLink = screen.getByRole("link", { name: `Learn more →` });
    expect(learnMoreLink).toHaveAttribute(
      "href",
      "/details/CHMA0000215045?page=1",
    );
  });
});
