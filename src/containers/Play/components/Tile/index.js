import React from 'react';
import PropTypes from 'prop-types';
import { SyncLoader } from 'react-spinners';

import classes from './index.module.css';

const Tile = (props) => {

  const {imgSrc, trackLoading} = props;

  const styles = {
    background: `url(${imgSrc}) no-repeat center center/cover`
  }

  const renderLoader = () => {
    if (!trackLoading) return null;

    const override = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;

    return (
      <div className={classes.loader}>
        <SyncLoader color='#6930C3' size={12} css={override} />
      </div>
    );
  }

  return (
    <div className={classes.container} style={styles}>
      {renderLoader()}
    </div>
  );
}

Tile.propTypes = {
  imgSrc: PropTypes.string,
  trackLoading: PropTypes.bool
}

export default Tile;