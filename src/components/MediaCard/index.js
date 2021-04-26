import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { PulseLoader } from 'react-spinners';

import BlockShimmer from '../BlockShimmer';
import playIcon from '../../assets/svgs/play.svg';
import addIcon from '../../assets/svgs/add.svg';
import removeIcon from '../../assets/svgs/remove.svg';
import pauseIcon from '../../assets/svgs/pause.svg';

import classes from './index.module.css';

const MediaCard = (props) => {

  const {
    url,
    thumbnail,
    title,
    duration,
    isPresent,
    isActive,
    isPlaying,
    isTrackLoading,

    onPlayClick,
    onAddClick,
    onRemoveClick,
    onPauseClick,

    containerClass,
    thumbnailSectionClass,
    infoSectionClass,
    shimmerBlockClass,
    thumbnailClass,
    titleClass,
    durationClass,
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

  const onAddIconClick = () => {
    if (typeof onAddClick === 'function') {
      onAddClick();
    }
  }

  const onRemoveIconClick = () => {
    if (typeof onRemoveClick === 'function') {
      onRemoveClick();
    }
  }

  const onPauseIconClick = () => {
    if (typeof onPauseClick === 'function') {
      onPauseClick();
    }
  }

  const renderAddOrRemove = () => {
    if (!isPresent) {
      return (
        <img 
          src={addIcon} 
          alt='addIcon'
          title='Add to Queue' 

          onClick={onAddIconClick}

          className={clsx(classes.playIcon, playIconClass)} 
        />
      );
    }

    return (
      <img 
        src={removeIcon} 
        alt='removeIcon'
        title='Remove from Queue' 

        onClick={onRemoveIconClick}

        className={clsx(classes.playIcon, playIconClass)} 
      />
    );
  }

  const renderPlayOrPause = () => {
    if (isActive && isPlaying) {
      return (
        <img 
          src={pauseIcon} 
          alt='pauseIcon'
          title='Pause' 

          onClick={onPauseIconClick}

          className={clsx(classes.playIcon, playIconClass)} 
        />
      );
    }

    return (
      <img 
        src={playIcon} 
        alt='playIcon'
        title='Play' 

        onClick={onPlayIconClick}

        className={clsx(classes.playIcon, playIconClass)} 
      />
    );
  }

  const renderActionSection = () => {
    if (isTrackLoading && isActive) return <PulseLoader color='#6930C3' size={5}/>;

    return (
      <div className={clsx(classes.actionSection, actionSectionClass)}>
        {renderPlayOrPause()}
        {renderAddOrRemove()}
      </div>
    );
  }

  return (
    <div className={clsx({
      [classes.container]: true, 
      [containerClass]: true,
      [classes.active]: isActive
    })}>
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
        <div title={duration} className={clsx(classes.duration, durationClass)}>
          {duration}
        </div>
        {renderActionSection()}
      </div>
    </div>
  );
}

MediaCard.propTypes = {
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  isPresent: PropTypes.bool,
  isActive: PropTypes.bool,
  isTrackLoading: PropTypes.bool,
  isPlaying: PropTypes.bool,

  onPlayClick: PropTypes.func,
  onPauseClick: PropTypes.func,
  onAddClick: PropTypes.func,
  onRemoveClick: PropTypes.func,

  containerClass: PropTypes.string,
  thumbnailSectionClass: PropTypes.string,
  infoSectionClass: PropTypes.string,
  shimmerBlockClass: PropTypes.string,
  thumbnailClass: PropTypes.string,
  titleClass: PropTypes.string,
  durationClass: PropTypes.string,
  actionSectionClass: PropTypes.string,
  playIconClass: PropTypes.string
}

export default MediaCard;