import { CardGroup, Flyout, DetailedCard } from "../components";
import classNames from "../styles/MainPage.module.css";
import { useTheme } from "../contexts/ThemeContext";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useRouter } from "next/router";
import startrekApiCall from "../services/startrekApiCall";
import { detailedDataApiCall } from "../services/detailedDataApiCall";
import {
  StartrekApiResponse,
  DetailedCharacterResponse,
} from "../services/apiSlice";
import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function MainPage({
  characterList,
  detailedCharacter,
}: {
  characterList: StartrekApiResponse;
  detailedCharacter: string | DetailedCharacterResponse;
}) {
  const navigate = useRouter();
  const darkTheme = useTheme();
  const showFlyout = useSelector(
    (state: RootState) => state.selection.selectedNumberOfEntries > 0,
  );

  const { getQueryFromLocalStorage } = useLocalStorage();

  const queryParams = navigate.query;
  const query = queryParams["query"] ? String(queryParams["query"]) : "";
  const page = queryParams["page"] ? Number(queryParams["page"]) : 1;
  const uid = queryParams["details"] ? String(queryParams["details"]) : "";

  useEffect(() => {
    const storedQuery = getQueryFromLocalStorage() || "";
    if (storedQuery !== navigate.query.query) {
      navigate.push({
        pathname: navigate.pathname,
        query: {
          query: storedQuery,
          page: 1,
        },
      });
    }
  }, []);

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
      <DetailedCard character={detailedCharacter.character}></DetailedCard>
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

interface contextProps {
  query: { page?: string; query?: string; details?: string };
}

export async function getServerSideProps(context: contextProps) {
  let { page, query, details } = context.query;
  page = page == undefined ? "1" : page;
  query = query == undefined ? "" : query;
  details = details == undefined ? "" : details;

  const charListResp = await startrekApiCall(query, Number(page));
  const detailedCharResp =
    details !== "" ? await detailedDataApiCall(details) : "";

  return {
    props: { characterList: charListResp, detailedCharacter: detailedCharResp },
  };
}
