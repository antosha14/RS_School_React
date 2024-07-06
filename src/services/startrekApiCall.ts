interface Animal {
  uid: string;
  name: string;
  earthAnimal: boolean;
  earthInsect: boolean;
  avian: boolean;
  canine: boolean;
  feline: boolean;
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
    clauses: [[]];
  };
  animals: Animal[];
}

async function startrekApiCall(animal: string): Promise<StartrekApiResponse> {
  const URL = `https://stapi.co/api/v1/rest/animal/search`;
  try {
    //сразу при старте страницы сделать запрос на либо все, либо часть с поиском из локал стореджа
    // loader should be shown while app makes a call to the api
    // error button, fallback UI
    const trimmedResponse = animal.trim();
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `name=${encodeURIComponent(trimmedResponse)}`,
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const animals: StartrekApiResponse = await response.json();
    return animals;
  } catch (error) {
    console.error("Error fetching animals:", error);
    throw error;
  }
}

export { startrekApiCall };
export type { Animal, StartrekApiResponse };
