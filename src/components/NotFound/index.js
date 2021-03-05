import React from 'react';

import classes from './index.module.css';

const NotFound = () => {
  return(
    <div className={classes.container}>
      <h1 className={classes.error}>404<br /> Page not found.</h1>
    </div>
  );
}

export default NotFound;