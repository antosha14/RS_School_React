import { Component, ErrorInfo, ReactNode } from "react";
import "./ErrorBoundary.css";

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
  }

  static getDerivedStateFromError(error: Error | null) {
    return { error: error };
  }

  static componentDidCatch(error: Error | null, errorInfo: ErrorInfo | null) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="errorContainer">{this.state.error?.toString()}</div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
