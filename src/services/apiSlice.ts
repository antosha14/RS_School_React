import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Character {
  uid: string;
  name: string;
  gender: string | null;
  yearOfBirth: number | null;
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

const baseURL = "https://stapi.co/api/v1/rest/character";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({
        characterName,
        page,
      }: {
        characterName: string;
        page: number;
      }) => {
        const trimmedRequest = characterName.trim();
        const urlSearchParams = new URLSearchParams({
          pageNumber: `${page - 1}`,
          pageSize: "10",
        });
        return {
          url: `/search?${urlSearchParams}`,
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `name=${encodeURIComponent(trimmedRequest)}`,
        };
      },
    }),
    getDetailedCharacterData: builder.query({
      query: (uid) => {
        const urlSearchParams = new URLSearchParams({
          uid: uid,
        });
        return `?${urlSearchParams}`;
      },
    }),
  }),
});

export const { useGetCharactersQuery, useGetDetailedCharacterDataQuery } =
  apiSlice;
export type { Character, StartrekApiResponse };
