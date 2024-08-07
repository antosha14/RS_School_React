import { Component, ErrorInfo, ReactNode } from "react";
import classnames from "./ErrorBoundary.module.css";
import Link from "next/link";

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
          <h1 className={classnames.errorHeader}>An error occurred!</h1>
          <p className={classnames.errorMessage}>
            {"Unknown error has happened"}
          </p>
          <Link
            href={"/"}
            onClick={this.handleClick}
            className={classnames.buttonToMainPage}
          >
            Reload the page
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
