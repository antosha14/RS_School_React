import { LoaderFunctionArgs } from "react-router-dom";

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

const detailedDataApiCall = async ({ params }: LoaderFunctionArgs) => {
  try {
    const uid = params.uid ? params.uid : "";
    const urlSearchParams = new URLSearchParams({
      uid: uid,
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
