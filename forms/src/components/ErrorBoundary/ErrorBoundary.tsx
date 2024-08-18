import { Component, ErrorInfo, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromError(error: Error | null) {
    return { error: error };
  }

  static componentDidCatch(error: Error | null, errorInfo: ErrorInfo | null) {
    console.error(error, errorInfo);
  }

  handleClick = () => {
    window.location.reload();
  };

  render() {
    if (this.state.error) {
      return (
        <div className={"w-3"}>
          <h1 className={"w-3"}>An error occurred!</h1>
          <p className={"w-3"}>{"Unknown error has happened"}</p>
          <NavLink to={"/"} onClick={this.handleClick} className={"w-3"}>
            Reload the page
          </NavLink>
        </div>
      );
    }
    return this.props.children;
  }
}
