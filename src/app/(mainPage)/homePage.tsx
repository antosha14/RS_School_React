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
import useQueryParams from "../../hooks/useQueryParams";

export default function HomePage({
  characterList,
  detailedCharacter,
}: {
  characterList: StartrekApiResponse;
  detailedCharacter: string | DetailedCharacterResponse;
}) {
  const darkTheme = useTheme();
  const showFlyout = useSelector(
    (state: RootState) => state.selection.selectedNumberOfEntries > 0,
  );

  const { currentDetails, currentPage, currentQuery } = useQueryParams();

  const query = currentQuery ? String(currentQuery) : "";
  const page = currentPage ? Number(currentPage) : 1;
  const uid = currentDetails ? String(currentDetails) : "";

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
        searchParams={searchParams}
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
