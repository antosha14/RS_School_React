import Card from "./Card";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("Card tests", () => {
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
    key: "",
    index: 0,
    uid: "",
  };
  it("The card component renders the relevant card data", () => {
    render(
      <MemoryRouter>
        <Card
          cardData={cardData.cardData}
          key={cardData.uid}
          index={cardData.index + 1}
          uid={cardData.uid}
        />
      </MemoryRouter>,
    );
    const cardElement = screen.getByText(`1. 0413 Theta`);
    expect(cardElement).toBeDefined();
  });
  it("Clicking on a card opens a detailed card component", () => {
    render(
      <MemoryRouter>
        <Card
          cardData={cardData.cardData}
          key={cardData.uid}
          index={cardData.index + 1}
          uid={cardData.uid}
        />
      </MemoryRouter>,
    );
    const learnMoreLink = screen.getByText(`Learn more →`);
    expect(learnMoreLink).toBeInTheDocument();
  });
});
