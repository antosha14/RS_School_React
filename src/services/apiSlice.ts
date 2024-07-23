import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character } from "./detailedDataApiCall";

const baseURL = "https://stapi.co/api/v1/rest/character";

interface detailedResponse {
  character: Character;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: (characterName: string) => {
        const trimmedRequest = characterName.trim();
        return {
          url: "/search",
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
