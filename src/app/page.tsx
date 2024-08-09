import startrekApiCall from "../services/startrekApiCall";
import { detailedDataApiCall } from "../services/detailedDataApiCall";
import HomePage from "./(mainPage)/homePage";

export async function getCharacters(
  query: string,
  page: number,
  details: string,
) {
  const charListResp = await startrekApiCall(query, Number(page));
  const detailedCharResp =
    details !== "" ? await detailedDataApiCall(details) : "";

  return {
    characterList: charListResp,
    detailedCharacter: detailedCharResp,
  };
}

export default async function MainPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams["query"] ? String(searchParams["query"]) : "";
  const page = searchParams["page"] ? Number(searchParams["page"]) : 1;
  const uid = searchParams["details"] ? String(searchParams["details"]) : "";

  const { characterList, detailedCharacter } = await getCharacters(
    query,
    page,
    uid,
  );
  return (
    <HomePage
      characterList={characterList}
      detailedCharacter={detailedCharacter}
      searchParams={searchParams}
    ></HomePage>
  );
}
