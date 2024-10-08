import startrekApiCall from "../services/startrekApiCall";
import { detailedDataApiCall } from "../services/detailedDataApiCall";

const respWith9Characters = {
  page: {
    pageNumber: 0,
    pageSize: 50,
    numberOfElements: 0,
    totalElements: 14,
    totalPages: 2,
    firstPage: true,
    lastPage: true,
  },
  sort: {
    clauses: [],
  },
  characters: [
    {
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
    {
      uid: "CHMA0000174718",
      name: "0718",
      gender: "M",
      yearOfBirth: "2259",
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
    {
      uid: "CHMA0000278055",
      name: "335",
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
    {
      uid: "CHMA0000282741",
      name: "355",
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
    {
      uid: "CHMA0000026532",
      name: "A'trom",
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
    {
      uid: "CHMA0000280385",
      name: "A. Armaganian",
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
    {
      uid: "CHMA0000226457",
      name: "A. Baiers",
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
    {
      uid: "CHMA0000232390",
      name: "A. Baiers",
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
  ],
};

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

describe("API calls tests", () => {
  it("API call fetches Startrek characters successfully", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => respWith9Characters,
    } as Response);

    const data = await startrekApiCall("Anton", 1);
    expect(fetch).toHaveBeenCalledTimes(1);

    expect(fetch).toHaveBeenCalledWith(
      "https://stapi.co/api/v1/rest/character/search?pageNumber=0&pageSize=10",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "name=Anton",
        next: { revalidate: 60 },
      },
    );
    expect(data).toEqual(respWith9Characters);
  });

  it("Characters API call handles HTTP errors gracefully", async () => {
    const errorMessage = "HTTP error 404";
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: errorMessage,
    } as Response);

    const characterName = "Anton";
    const page = 2;
    await expect(startrekApiCall(characterName, page)).rejects.toThrow(
      errorMessage,
    );
  });

  it("Detailed API call fetches details successfully", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockedCardData,
    } as Response);

    const testUID = "CHMA0000215045";
    const detailedData = await detailedDataApiCall(testUID);
    expect(fetch).toHaveBeenCalledTimes(1);

    expect(fetch).toHaveBeenCalledWith(
      `https://stapi.co/api/v1/rest/character?uid=${testUID}`,
      { next: { revalidate: 60 } },
    );
    expect(detailedData).toEqual(mockedCardData);
  });

  it("Detailed API call handles errors gracefully", async () => {
    const errorMessage = "HTTP error 404";
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: errorMessage,
    } as Response);

    const testUID = "CHMA0000215045";
    await expect(detailedDataApiCall(testUID)).rejects.toThrow(errorMessage);
  });
});
