interface Character {
  uid: "string";
  name: "string";
  gender: "F";
  yearOfBirth: 0;
  monthOfBirth: 0;
  dayOfBirth: 0;
  placeOfBirth: "string";
  yearOfDeath: 0;
  monthOfDeath: 0;
  dayOfDeath: 0;
  placeOfDeath: "string";
  height: 0;
  weight: 0;
  deceased: true;
  bloodType: "B_NEGATIVE";
  maritalStatus: "SINGLE";
  serialNumber: "string";
  hologramActivationDate: "string";
  hologramStatus: "string";
  hologramDateStatus: "string";
  hologram: true;
  fictionalCharacter: true;
  mirror: true;
  alternateReality: true;
  performers: [[]];
  episodes: [[]];
  movies: [[]];
  characterSpecies: [[]];
  characterRelations: [[]];
  titles: [[]];
  occupations: [[]];
  organizations: [[]];
}

const detailedDataApiCall = async ({ params }: { params: { uid: string } }) => {
  try {
    const urlSearchParams = new URLSearchParams({
      uid: params.uid,
    });
    const URL = `https://stapi.co/api/v1/rest/character?${urlSearchParams}`;
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    const { character } = await response.json();
    return character;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export { detailedDataApiCall };
export type { Character };
