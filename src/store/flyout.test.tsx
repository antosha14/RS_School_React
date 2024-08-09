import reducer, {
  addEntryToSelected,
  deleteEntryFromSelected,
  unselectAllEntries,
} from "./flyout";

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

describe("Flyout store tests", () => {
  it("Adding to store works according to specification", () => {
    expect(
      reducer(
        { selectedNumberOfEntries: 1, entriesSelected: [mockedCharacters[0]] },
        addEntryToSelected(mockedCharacters[1]),
      ),
    ).toEqual({
      selectedNumberOfEntries: 2,
      entriesSelected: [mockedCharacters[0], mockedCharacters[1]],
    });
    expect(
      reducer(
        {
          selectedNumberOfEntries: 2,
          entriesSelected: [mockedCharacters[0], mockedCharacters[1]],
        },
        deleteEntryFromSelected(mockedCharacters[1]),
      ),
    ).toEqual({
      selectedNumberOfEntries: 1,
      entriesSelected: [mockedCharacters[0]],
    });
  });

  it("Unselect all works according to specification", () => {
    expect(
      reducer(
        { selectedNumberOfEntries: 1, entriesSelected: [mockedCharacters[0]] },
        unselectAllEntries(),
      ),
    ).toEqual({
      selectedNumberOfEntries: 0,
      entriesSelected: [],
    });
  });
});
