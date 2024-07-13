import { Component, ErrorInfo, ReactNode } from "react";
import classnames from "./ErrorBoundary.module.css";
import { NavLink } from "react-router-dom";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
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
        <div className={classnames.errorContainer}>
          <h1>An error occurred!</h1>
          <p>
            {this.state.error?.toString() == "Error: Red button"
              ? `You pressed the wrong button ${String.fromCodePoint(0x1f621)}`
              : "Unknown error has happened"}
          </p>
          <NavLink to={"/"} onClick={this.handleClick}>
            Reload the page
          </NavLink>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
