import {
  SearchForm,
  CardGroup,
  LoadingSpinner,
  ButtonError,
} from "../components";
import {
  startrekApiCall,
  StartrekApiResponse,
} from "../services/startrekApiCall";
import { useState } from "react";

interface InputState {
  query: string;
  searchedElements: StartrekApiResponse | null;
  isLoading: boolean;
}

function MainPage() {
  const [inputState, setInputState] = useState<InputState>({
    query: (localStorage.getItem("prevQuery") as string) || "",
    searchedElements: null,
    isLoading: true,
  });

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      localStorage.setItem("prevQuery", inputState.query as string);
    }

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
        <div className="headerContainer">
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
          <CardGroup searchedElements={inputState.searchedElements}></CardGroup>
        )}
      </main>
    </>
  );
}

export default MainPage;
