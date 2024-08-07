import { StartrekApiResponse } from "./apiSlice";

async function startrekApiCall(
  characterName: string,
  page: number,
): Promise<StartrekApiResponse> {
  try {
    const trimmedRequest = characterName.trim();
    const urlSearchParams = new URLSearchParams({
      pageNumber: `${page - 1}`,
      pageSize: "10",
    });
    const URL = `https://stapi.co/api/v1/rest/character/search?${urlSearchParams}`;
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${encodeURIComponent(trimmedRequest)}`,
      cache: "force-cache",
      next: { revalidate: 60 },
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

export default startrekApiCall;
