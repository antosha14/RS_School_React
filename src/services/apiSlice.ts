interface Character {
  uid: string;
  name: string;
  gender: string | null;
  yearOfBirth: string | null;
  monthOfBirth: number | null;
  dayOfBirth: number | null;
  placeOfBirth: string | null;
  yearOfDeath: number | null;
  monthOfDeath: number | null;
  dayOfDeath: number | null;
  placeOfDeath: string | null;
  height: number | null;
  weight: number | null;
  deceased: true | null;
  bloodType: string | null;
  maritalStatus: string | null;
  serialNumber: string | null;
  hologramActivationDate: string | null;
  hologramStatus: string | null;
  hologramDateStatus: string | null;
  hologram: boolean | null;
  fictionalCharacter: boolean | null;
  mirror: boolean | null;
  alternateReality: boolean | null;
}

interface StartrekApiResponse {
  page: {
    pageNumber: number;
    pageSize: number;
    numberOfElements: number;
    totalElements: number;
    totalPages: number;
    firstPage: boolean;
    lastPage: boolean;
  };
  sort: {
    clauses: [[]] | never[];
  };
  characters: Character[] | never[];
}

interface DetailedCharacterResponse {
  character: Character;
}

export type { Character, StartrekApiResponse, DetailedCharacterResponse };
