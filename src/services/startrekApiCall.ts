import { Character } from "./detailedDataApiCall";

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

async function startrekApiCall(
  characterName: string,
): Promise<StartrekApiResponse> {
  const URL = `https://stapi.co/api/v1/rest/character/search`;
  try {
    const trimmedRequest = characterName.trim();
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${encodeURIComponent(trimmedRequest)}`,
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const characters: StartrekApiResponse = await response.json();
    return characters;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
}

export { startrekApiCall };
export type { Character, StartrekApiResponse };
