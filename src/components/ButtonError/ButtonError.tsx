import { Component } from "react";
import "./ButtonError.css";

interface ButtonErrorState {
  isError: boolean;
}

interface ButtonErrorProps {
  children: string;
}

class ButtonError extends Component<ButtonErrorProps, ButtonErrorState> {
  constructor(props: ButtonErrorProps) {
    super(props);
    this.state = { isError: false };
    this.throwError = this.throwError.bind(this);
  }

  throwError = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) {
      throw new Error(
        "Did you press the red button? What a pity... Now you should reload the page. Be careful next time.",
      );
    }
    return (
      <button className="crash" onClick={this.throwError}>
        Crash the app
      </button>
    );
  }
}

export default ButtonError;
