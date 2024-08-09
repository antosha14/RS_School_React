"use client";

import { CardGroup, Flyout, DetailedCard } from "../../components";
import classNames from "../../styles/MainPage.module.css";
import { useTheme } from "../../contexts/ThemeContext";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  StartrekApiResponse,
  DetailedCharacterResponse,
} from "../../services/apiSlice";
import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import startrekApiCall from "../../services/startrekApiCall";
import { detailedDataApiCall } from "../../services/detailedDataApiCall";


export async function getCharacters(
  query: string,
  page: number,
  details: string,
): Promise<{ characterList: StartrekApiResponse; detailedCharacter: DetailedCharacterResponse; }> {
  const charListResp = await startrekApiCall(query, Number(page));
  const detailedCharResp =
    details !== "" ? await detailedDataApiCall(details) : "";

  return {
    characterList: charListResp,
    detailedCharacter: detailedCharResp,
  };
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  useEffect(() => {
    const storedQuery = localQuery || "";
    if (storedQuery !== searchParams.query) {
      navigate.push(`/?query=${storedQuery}&page=1`);
    }
  }, []);
  
  const navigate = useRouter();
  const darkTheme = useTheme();
  const showFlyout = useSelector(
    (state: RootState) => state.selection.selectedNumberOfEntries > 0,
  );
  const { getQueryFromLocalStorage } = useLocalStorage();
  const localQuery =getQueryFromLocalStorage()

  const query = searchParams["query"] ? String(searchParams["query"]) : "";
  const page = searchParams["page"] ? Number(searchParams["page"]) : 1;
  const uid = searchParams["details"] ? String(searchParams["details"]) : "";

  const {characterList, detailedCharacter} = await getCharacters(query, page, uid)



  const fetchedCharacters = (
    <div className={classNames.paginationContainer}>
      <CardGroup
        key={`${query}&${page}`}
        searchedElements={characterList}
        depth={characterList.page.totalPages}
      ></CardGroup>
    </div>
  );

  let characterDetails;
  if (uid == "" || typeof detailedCharacter == "string") {
    characterDetails = <></>;
  } else {
    characterDetails = (
      <DetailedCard
        character={detailedCharacter.character}
      ></DetailedCard>
    );
  }

  return (
    <>
      <main
        className={
          darkTheme ? classNames.mainContainer : classNames.mainContainerLight
        }
      >
        {fetchedCharacters}
        {characterDetails}
      </main>
      {showFlyout ? <Flyout></Flyout> : <></>}
    </>
  );
}
