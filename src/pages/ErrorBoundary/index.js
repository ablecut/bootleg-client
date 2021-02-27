import React from 'react';

import classes from './index.module.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={classes.container}>
          <h1 className={classes.error}>
            Something Went Wrong. <br />
            Either the Internet's bad or the Server's down
          </h1>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;