import reducer, {
  addFetchedCharactersToStore,
  addFetchedDetailedCharacterToStore,
} from "./pageItems";

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

describe("Page items store tests", () => {
  it("Passed page items are saved to store (not RTK cash)", () => {
    expect(
      reducer(undefined, addFetchedCharactersToStore(mockedCharacters)),
    ).toEqual({
      characters: mockedCharacters,
      detailedCharacter: "",
    });

    expect(
      reducer(
        {
          characters: mockedCharacters,
          detailedCharacter: "",
        },
        addFetchedDetailedCharacterToStore(mockedCharacters[0]),
      ),
    ).toEqual({
      characters: mockedCharacters,
      detailedCharacter: mockedCharacters[0],
    });
  });
});
