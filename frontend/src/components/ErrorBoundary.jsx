import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.error("🚨 ErrorBoundary Caught:", error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p className="text-red-500">{console.log(this.state)}</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
