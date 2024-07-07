import { Component } from "react";
import "./Input.css";

interface inputProps {
  onInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
  currentQuery: string;
}

class Input extends Component<inputProps> {
  constructor(props: inputProps) {
    super(props);
  }

  render() {
    return (
      <input
        onChange={this.props.onInputChange}
        value={this.props.currentQuery}
        type="search"
        placeholder="Search for animals in Star trek API"
      ></input>
    );
  }
}

export default Input;
