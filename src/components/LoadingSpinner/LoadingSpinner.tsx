import { Component } from "react";
import "./LoadingSpinner.css";

class LoadingSpinner extends Component {
  constructor(props: string) {
    super(props);
  }

  render() {
    return <span>Loading...</span>;
  }
}

export default LoadingSpinner;
