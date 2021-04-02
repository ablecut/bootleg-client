import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import TrackCard from '../../components/TrackCard';
import { setInitialData, setCurrentActiveTrack, removeTrackFromQueue } from '../../store/modules/Queue/thunks/queueThunk';
import searchIcon from '../../assets/svgs/search.svg';

import classes from './index.module.css';

const Queue = () => {

  const { username } = useSelector((state) => {
    return state.auth.login;  
  });

  const { queue, currentIndex } = useSelector((state) => {
    return state.queue;
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (queue.length === 0) {
      dispatch(setInitialData(username));
    }
  }, [dispatch, queue.length, username]);

  const onPlayClick = (index) => {
    return () => {
      dispatch(setCurrentActiveTrack(username, index));
    }
  }

  const onRemoveClick = (index) => {
    return () => {
      dispatch(removeTrackFromQueue(username, index));
    }
  }

  const renderTracks = () => {
    if (!queue || !queue?.length) {
      return (
        <div className={classes.emptyContainer}>
          <img src={searchIcon} alt='searchIcon' className={classes.searchIcon} />
          <div className={classes.emptyText}>No tracks found, Search <Link to='/search' className={classes.here}>here</Link> and add to Queue</div>
        </div>
      );
    }

    return queue.map((track, index) => {
      return (
        <div key={index} className={classes.trackContainer}>
          <TrackCard 
            track={track}
            showRemove
            showPlay
            activeTrack={index === currentIndex}

            onPlayClick={onPlayClick(index)}
            onRemoveClick={onRemoveClick(index)}
          />
        </div>
      );
    })
  }

  return (
    <div className={classes.container} >
      {renderTracks()}
    </div>
  );
}

export default Queue;