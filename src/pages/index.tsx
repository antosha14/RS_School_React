import { CardGroup, LoadingSpinner, Flyout, DetailedCard } from "../components";
import { useEffect } from "react";
import classNames from "../styles/MainPage.module.css";
import { useTheme } from "../contexts/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  useGetCharactersQuery,
  useGetDetailedCharacterDataQuery,
} from "../services/apiSlice";
import { fetchedItemsActions } from "../store/pageItems";
import { useRouter } from "next/router";

export default function MainPage() {
  const navigate = useRouter();
  const darkTheme = useTheme();
  const dispatch = useDispatch();
  const showFlyout = useSelector(
    (state: RootState) => state.selection.selectedNumberOfEntries > 0,
  );

  const searchParams = navigate.query;
  const uid = searchParams.uid ? searchParams.uid : "";
  const {
    data: detailedCharacterData,
    isFetching: detailedIsFetching,
    isSuccess: detailedIsSuccess,
    isError: detailedIsError,
  } = useGetDetailedCharacterDataQuery(uid);

  useEffect(() => {
    if (detailedCharacterData) {
      dispatch(
        fetchedItemsActions.addFetchedDetailedCharacterToStore(
          detailedCharacterData.character,
        ),
      );
    }
  }, [detailedCharacterData, dispatch]);

  const queryParams = navigate.query;
  const query = queryParams["query"] ? String(queryParams["query"]) : "";
  const page = queryParams["page"] ? Number(queryParams["page"]) : 1;

  const { data: charactersData, isFetching: listIsFetching } =
    useGetCharactersQuery({ characterName: query, page: Number(page) });

  useEffect(() => {
    if (charactersData) {
      dispatch(
        fetchedItemsActions.addFetchedCharactersToStore(
          charactersData.characters,
        ),
      );
    }
  }, [charactersData, dispatch]);

  let fetchedCharacters;
  if (listIsFetching) {
    fetchedCharacters = <LoadingSpinner></LoadingSpinner>;
  } else {
    fetchedCharacters = (
      <div className={classNames.paginationContainer}>
        <CardGroup
          key={`${query}&${page}`}
          searchedElements={charactersData}
          depth={charactersData.page.totalPages}
        ></CardGroup>
      </div>
    );
  }

  let characterDetails;
  if (listIsFetching || uid == "") {
    characterDetails = <></>;
  } else if (detailedIsFetching) {
    characterDetails = (
      <div className={classNames.detailedCardContainer}>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  } else if (detailedIsSuccess) {
    characterDetails = (
      <DetailedCard character={detailedCharacterData.character}></DetailedCard>
    );
  } else if (detailedIsError) {
    characterDetails = (
      <div className={classNames.detailedCardContainer}>
        <p>Error Loading Detailed Character Data</p>
      </div>
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
