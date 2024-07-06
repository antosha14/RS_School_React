import { Component } from "react";
import { SearchForm, CardGroup } from "../components";
import {
  startrekApiCall,
  StartrekApiResponse,
} from "../services/startrekApiCall";

interface InputState {
  query: string;
  searchedElements: StartrekApiResponse | null;
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
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("prevQuery", this.state.query);
    startrekApiCall(this.state.query.toString()).then(
      (response: StartrekApiResponse) => {
        this.setState({ searchedElements: response });
      },
    );
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
            onFormSubmisson={this.handleSubmit}
            onInputChange={this.handleQueryChange}
            currentQuery={this.state.query}
          ></SearchForm>
        </header>
        <main>
          <CardGroup searchedElements={this.state.searchedElements}></CardGroup>
        </main>
      </>
    );
  }
}

export default MainPage;
