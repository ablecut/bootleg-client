import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { container, titleText, spinner, double_bounce1, double_bounce2} from './index.module.css';

const SuspenseLoader = (props) => {

  const {
    title,
    containerClass,
    titleClass,
    loader
  } = props;

  const renderLoader = () => {
    if (loader) return loader;

    return(
      <div className={spinner}>
        <div className={double_bounce1} />
        <div className={double_bounce2} />
      </div>
    ); 
  }

  return(
    <div className={clsx(container, containerClass)}>
      <h1 className={clsx(titleText, titleClass)}>{title}</h1>
      {renderLoader()}
    </div>
  );
}

SuspenseLoader.defaultProps = {
  title: 'bootleg'
}

SuspenseLoader.propTypes = {
  title: PropTypes.string,
  containerClass: PropTypes.string,
  titleClass: PropTypes.string,
  loader: PropTypes.node
}

export default SuspenseLoader;