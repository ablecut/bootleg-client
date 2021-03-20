import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import BlockShimmer from '../BlockShimmer';
import playIcon from '../../assets/svgs/play.svg';

import classes from './index.module.css';

const MediaCard = (props) => {

  const {
    url,
    thumbnail,
    title,
    channelName,

    onPlayClick,

    containerClass,
    thumbnailSectionClass,
    infoSectionClass,
    shimmerBlockClass,
    thumbnailClass,
    titleClass,
    channelNameClass,
    actionSectionClass,
    playIconClass
  } = props;

  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);

  const hideShimmer = () => {
    if (!thumbnailLoaded) return null;

    return {
      display: 'none'
    }
  }

  const onThumbnailLoad = () => {
    setThumbnailLoaded(true);
  }

  const onPlayIconClick = () => {
    if (typeof onPlayClick === 'function') {
      onPlayClick(url);
    }
  }

  return (
    <div className={clsx(classes.container, containerClass)}>
      <div className={clsx(classes.thumbnailSection, thumbnailSectionClass)}>
        <div style={hideShimmer()}>
          <BlockShimmer blockClass={clsx(classes.blockClass, shimmerBlockClass)}/>
        </div>
        <img 
          src={thumbnail} 
          alt={thumbnail} 

          onLoad={onThumbnailLoad}

          className={clsx(classes.thumbnail, thumbnailClass)} />
      </div>
      <div className={clsx(classes.infoSection, infoSectionClass)}>
        <div title={title} className={clsx(classes.title, titleClass)}>
          {title}
        </div>
        <div title={channelName} className={clsx(classes.channelName, channelNameClass)}>
          {channelName}
        </div>
        <div className={clsx(classes.actionSection, actionSectionClass)}>
          <img 
            src={playIcon} 
            alt='playIcon' 

            onClick={onPlayIconClick}

            className={clsx(classes.playIcon, playIconClass)} 
          />
        </div>
      </div>
    </div>
  );
}

MediaCard.propTypes = {
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,

  onPlayClick: PropTypes.func,

  containerClass: PropTypes.string,
  thumbnailSectionClass: PropTypes.string,
  infoSectionClass: PropTypes.string,
  shimmerBlockClass: PropTypes.string,
  thumbnailClass: PropTypes.string,
  titleClass: PropTypes.string,
  channelNameClass: PropTypes.string,
  actionSectionClass: PropTypes.string,
  playIconClass: PropTypes.string
}

export default MediaCard;