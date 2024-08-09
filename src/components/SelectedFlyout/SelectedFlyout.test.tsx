import Flyout from "./SelectedFlyout";
import { screen } from "@testing-library/react";
import server from "../../tests/msw/server";
import { renderWithStore } from "../../tests/testingUtils/testUtils";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockedCharacters = [
  {
    uid: "CHMA0000174718",
    name: "0718",
    gender: "M",
    yearOfBirth: 2259,
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
    mirror: false,
    alternateReality: true,
  },
  {
    uid: "CHMA0000283851",
    name: "10111",
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
    mirror: false,
    alternateReality: false,
  },
];

vi.stubGlobal("URL", {
  createObjectURL: vi.fn(() => "mocked_csv_url"),
});

vi.mock("../../services/charactersToCsv", () => ({
  default: vi.fn(() => new Blob(["mocked csv content"], { type: "text/csv" })),
}));

describe("Flyout tests", () => {
  it("Flyout component displays correct data", () => {
    renderWithStore(<Flyout></Flyout>, {
      preloadedState: {
        selection: {
          selectedNumberOfEntries: 2,
          entriesSelected: mockedCharacters,
        },
      },
    });

    const unselectAllButton = screen.getByText(/Unselect all/i);
    expect(unselectAllButton).toBeInTheDocument();

    const downloadAllButton = screen.getByText(/Download/i);
    expect(downloadAllButton).toBeInTheDocument();

    const selectedData = screen.getByText(`Selected 2 items`);
    expect(selectedData).toBeInTheDocument();
  });
});
