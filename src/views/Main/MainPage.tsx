import {
  SearchForm,
  CardGroup,
  LoadingSpinner,
  ButtonError,
  ToggleThemeButton,
  Flyout,
} from "../../components";
import {
  startrekApiCall,
  StartrekApiResponse,
} from "../../services/startrekApiCall";
import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  Outlet,
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import classNames from "./MainPage.module.css";
import { useTheme } from "../../store/ThemeContext";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import {
  useGetCharactersQuery,
  useGetDetailedCharacterDataQuery,
} from "../../services/apiSlice";
import { fetchedItemsActions } from "../../store/pageItems";

interface InputState {
  query: string;
  searchedElements: StartrekApiResponse | null;
  isLoading: boolean;
}

function MainPage() {
  const [initialQuery, setPrevQuery] = useLocalStorage("prevQuery");
  const [inputState, setInputState] = useState<InputState>({
    query: initialQuery,
    searchedElements: null,
    isLoading: true,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const darkTheme = useTheme();
  const dispatch = useDispatch();
  const showFlyout = useSelector(
    (state: RootState) => state.selection.selectedNumberOfEntries > 0,
  );

  const searchParams = useParams();
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

  const [queryParams] = useSearchParams();
  const query = queryParams.get("query")
    ? String(queryParams.get("query"))
    : "";

  const {
    data: charactersData,
    isFetching: listIsFetching,
    isSuccess: listFetchingIsSuccess,
    isError: listFetchingIsError,
  } = useGetCharactersQuery(query);

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      setPrevQuery(inputState.query);
    }

    navigate(`/?query=${inputState.query}&page=1`);
    setInputState((prevState: InputState) => {
      return { ...prevState, isLoading: true };
    });

    startrekApiCall(inputState.query.toString())
      .then((response: StartrekApiResponse) => {
        setInputState((prevState: InputState) => {
          return { ...prevState, searchedElements: response };
        });
      })
      .finally(() => {
        setInputState((prevState: InputState) => {
          return { ...prevState, isLoading: false };
        });
      });
  };

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState((prevState: InputState) => {
      return { ...prevState, query: event.target.value };
    });
  };

  let fetchedCharacters;
  if (inputState.isLoading) {
    fetchedCharacters = <LoadingSpinner></LoadingSpinner>;
  } else {
    fetchedCharacters = (
      <div
        className={
          location.pathname.startsWith("/details")
            ? classNames.paginationContainerOver
            : classNames.paginationContainer
        }
      >
        <CardGroup searchedElements={inputState.searchedElements}></CardGroup>
      </div>
    );
  }

  let characterDetails;
  if (inputState.isLoading || uid == "") {
    characterDetails = <></>;
  } else if (detailedIsFetching) {
    characterDetails = (
      <div className={classNames.detailedCardContainer}>
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  } else if (detailedIsSuccess) {
    characterDetails = (
      <Outlet context={{ character: detailedCharacterData.character }}></Outlet>
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
      <header
        className={darkTheme ? classNames.header : classNames.headerLight}
      >
        <div className={classNames.headerContainer}>
          <SearchForm
            onFormSubmission={handleSubmit}
            onInputChange={handleQueryChange}
            currentQuery={inputState.query}
          ></SearchForm>
          <ButtonError></ButtonError>
          <ToggleThemeButton></ToggleThemeButton>
        </div>
      </header>
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

export default MainPage;
