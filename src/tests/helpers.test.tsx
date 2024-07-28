import { describe, it, expect } from "vitest";
import charactersToCsv from "../services/charactersToCsv";
import { Character } from "../services/apiSlice";

const mockCharacters: Character[] = [
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

function readBlob(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}

describe("charactersToCsv", () => {
  it("should convert an array of characters to a CSV Blob", async () => {
    const result = charactersToCsv(mockCharacters);

    expect(result).toBeInstanceOf(Blob);
    expect(result.type).toBe("text/csv");

    const text = await readBlob(result);

    const expectedCsv =
      "uid,name,gender,yearOfBirth,monthOfBirth,dayOfBirth,placeOfBirth,yearOfDeath,monthOfDeath,dayOfDeath,placeOfDeath,height,weight,deceased,bloodType,maritalStatus,serialNumber,hologramActivationDate,hologramStatus,hologramDateStatus,hologram,fictionalCharacter,mirror,alternateReality\n" +
      "CHMA0000174718,0718,M,2259,,,,,,,,,,,,,,,,,false,false,false,true\n" +
      "CHMA0000283851,10111,,,,,,,,,,,,,,,,,,,false,false,false,false";

    expect(text).toBe(expectedCsv);
  });
});
