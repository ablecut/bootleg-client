import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { formatDuration } from '../../utils';
import removeIcon from '../../assets/svgs/remove.svg';
import addToQueueIcon from '../../assets/svgs/add.svg';
import playIcon from '../../assets/svgs/play.svg';

import classes from './index.module.css';

const TrackCard = (props) => {
  const { 
    track,
    showRemove,
    showAddToQueue,
    showPlay,
    activeTrack,

    onPlayClick,
    onAddToQueueClick,
    onRemoveClick,

    containerClass,
    actionContainerClass,
    iconClass,
    infoContainerClass,
    titleClass,
    durationClass,
    activeTrackClass
  } = props;

  const handlePlayClick = () => {
    if (typeof onPlayClick === 'function') {
      onPlayClick(track);
    }
  }

  const handleAddToQueueClick = () => {
    if (typeof onAddToQueueClick === 'function') {
      onAddToQueueClick(track);
    }
  }

  const handleRemoveClick = () => {
    if (typeof onRemoveClick === 'function') {
      onRemoveClick(track);
    }
  }

  const renderActionButtons = () => {
    return (
      <div className={clsx(classes.actionContainer, actionContainerClass)}>
        {showPlay && <img src={playIcon} alt='playIcon' title='Play' onClick={handlePlayClick} className={clsx(classes.icon, iconClass)}/>}
        {showAddToQueue && <img src={addToQueueIcon} alt='addToQueueIcon' title='Add To Queue' onClick={handleAddToQueueClick} className={clsx(classes.icon, iconClass)} />}
        {showRemove && <img src={removeIcon} alt='removeIcon' title='Remove' onClick={handleRemoveClick} className={clsx(classes.icon, iconClass)} />}
      </div>
    );
  }

  const renderInfo = () => {
    return (
      <div className={clsx(classes.infoContainer, infoContainerClass)}>
        <div className={clsx(classes.title, titleClass)}>{track.title}</div>
        <div className={clsx(classes.duration, durationClass)}>{formatDuration(track.duration)}</div>
      </div>
    );
  }

  return (
    <div className={clsx({
      [classes.container]: true,
      [containerClass]: true,
      [classes.activeTrack]: activeTrack,
      [activeTrackClass]: activeTrack
    })}>
      {renderActionButtons()}
      {renderInfo()}
    </div>
  );
}

TrackCard.propTypes = {
  track: PropTypes.object.isRequired,
  showRemove: PropTypes.bool,
  showAddToQueue: PropTypes.bool,
  showPlay: PropTypes.bool,
  activeTrack: PropTypes.bool,

  onPlayClick: PropTypes.func,
  onAddToQueueClick: PropTypes.func,
  onRemoveClick: PropTypes.func,

  containerClass: PropTypes.string,
  actionContainerClass: PropTypes.string,
  iconClass: PropTypes.string,
  infoContainerClass: PropTypes.string,
  titleClass: PropTypes.string,
  durationClass: PropTypes.string,
  activeTrackClass: PropTypes.string
}

export default TrackCard;