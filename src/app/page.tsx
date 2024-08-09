import startrekApiCall from "../services/startrekApiCall";
import { detailedDataApiCall } from "../services/detailedDataApiCall";
import HomePage from "./(mainPage)/homePage";
import { Suspense } from "react";
import { LoadingSpinner } from "../components";
import classNames from "../styles/MainPage.module.css";

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
    <Suspense
      key={"char"}
      fallback={
        <div className={classNames.mainContainerLight}>
          <LoadingSpinner></LoadingSpinner>
        </div>
      }
    >
      <HomePage
        characterList={characterList}
        detailedCharacter={detailedCharacter}
        searchParams={searchParams}
      ></HomePage>
    </Suspense>
  );
}
