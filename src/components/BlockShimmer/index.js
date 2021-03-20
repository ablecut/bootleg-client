import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import classes from './index.module.css';

const BlockShimmer = (props) => {

  const { blockClass } = props;

  return (
    <div className={clsx(classes.block, blockClass)}/>
  );
}

BlockShimmer.propTypes = {
  blockClass: PropTypes.string
}

export default BlockShimmer;