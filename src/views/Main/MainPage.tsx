import {
  SearchForm,
  CardGroup,
  LoadingSpinner,
  ButtonError,
} from "../../components";
import {
  startrekApiCall,
  StartrekApiResponse,
} from "../../services/startrekApiCall";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import {
  Outlet,
  useNavigate,
  useNavigation,
  useLocation,
} from "react-router-dom";
import classNames from "./MainPage.module.css";

interface InputState {
  query: string;
  searchedElements: StartrekApiResponse | null;
  isLoading: boolean;
}

function MainPage() {
  const navigation = useNavigation();
  const [initialQuery, setPrevQuery] = useLocalStorage("prevQuery");
  const [inputState, setInputState] = useState<InputState>({
    query: initialQuery,
    searchedElements: null,
    isLoading: true,
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      setPrevQuery(inputState.query);
    }

    navigate(`/?page=1`);
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

  return (
    <>
      <header>
        <div className={classNames.headerContainer}>
          <SearchForm
            onFormSubmission={handleSubmit}
            onInputChange={handleQueryChange}
            currentQuery={inputState.query}
          ></SearchForm>
          <ButtonError></ButtonError>
        </div>
      </header>
      <main className={inputState.isLoading ? "loading" : "list"}>
        {inputState.isLoading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <div
            className={
              location.pathname.startsWith("/details")
                ? classNames.paginationContainerOver
                : classNames.paginationContainer
            }
          >
            <CardGroup
              searchedElements={inputState.searchedElements}
            ></CardGroup>
          </div>
        )}
        {navigation.state === "loading" ? (
          <div className={classNames.detailedCardContainer}>
            <LoadingSpinner></LoadingSpinner>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </main>
    </>
  );
}

export default MainPage;
