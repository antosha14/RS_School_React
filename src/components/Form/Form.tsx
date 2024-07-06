import { Component } from "react";
import "./Form.css";
import { Input, Button } from "../index";

interface searchProps {
  onFormSubmisson: (event: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  currentQuery: string;
}

class SearchForm extends Component<searchProps> {
  constructor(props: searchProps) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onFormSubmisson}>
        <Input
          onInputChange={this.props.onInputChange}
          currentQuery={this.props.currentQuery}
        ></Input>
        <Button></Button>
      </form>
    );
  }
}

export default SearchForm;
