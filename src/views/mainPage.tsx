import { Component } from "react";
import { SearchForm, CardGroup, LoadingSpinner } from "../components";
import {
  startrekApiCall,
  StartrekApiResponse,
} from "../services/startrekApiCall";

interface InputState {
  query: string;
  searchedElements: StartrekApiResponse | null;
  isLoading: boolean;
}

class MainPage extends Component {
  constructor(props: string) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  state: InputState = {
    query: (localStorage.getItem("prevQuery") as string) || "",
    searchedElements: null,
    isLoading: true,
  };

  handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
      localStorage.setItem("prevQuery", this.state.query);
    }
    this.setState({ isLoading: true });
    startrekApiCall(this.state.query.toString())
      .then((response: StartrekApiResponse) => {
        this.setState({ searchedElements: response });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleQueryChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      query: event.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        <header>
          <SearchForm
            onFormSubmission={this.handleSubmit}
            onInputChange={this.handleQueryChange}
            currentQuery={this.state.query}
          ></SearchForm>
        </header>
        <main>
          {this.state.isLoading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            <CardGroup
              searchedElements={this.state.searchedElements}
            ></CardGroup>
          )}
        </main>
      </>
    );
  }
}

export default MainPage;
