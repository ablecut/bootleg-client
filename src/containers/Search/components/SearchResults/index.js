import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import randomstring from 'randomstring';

import MediaCard from '../../../../components/MediaCard';
import BlockShimmer from '../../../../components/BlockShimmer';
import { addTrackToQueue, playTrack, removeTrackFromQueue } from '../../../../store/modules/Queue/thunks/queueThunk';
import { setIsPlaying } from '../../../../store/modules/Player/slices/playerSlice';
import { formatDuration, fetchTrackData } from '../../../../utils';
import PlayerContext from '../../../../contexts/PlayerContext';

import classes from './index.module.css';

const SearchResults = (props) => {

  const { loading, searchResults, username } = props;

  const dispatch = useDispatch();

  const { playerRef } = useContext(PlayerContext);

  const { queue, currentIndex } = useSelector((state) => {
    return state.queue;
  })

  const { isTrackLoading, isPlaying } = useSelector((state) => {
    return state.player;
  })

  const onAddToQueueClick = (track) => {
    return () => {
      dispatch(addTrackToQueue(username, track));
    }
  }

  const onPlayClick = (track) => {
    return async () => {
      dispatch(setIsPlaying({
        isPlaying: false
      }))
      playerRef.current.pause();

      if (playerRef.current.getAttribute('data-id') === track.id) {
        playerRef.current.play();

        dispatch(setIsPlaying({
          isPlaying: true
        }));

        return;
      }

      const key = randomstring.generate({
        length: 6
      });

      playerRef.current.setAttribute('data-id', track.id);
      playerRef.current.setAttribute('key', key);
      

      await dispatch(playTrack(username, track));
      const uri = await fetchTrackData(track.url, dispatch, playerRef, key);

      playerRef.current.src = uri;
      playerRef.current.load();
      playerRef.current.play();

      dispatch(setIsPlaying({
        isPlaying: true
      }));
    }
  }

  const onPauseClick = () => {
    playerRef.current.pause();
    
    dispatch(setIsPlaying({
      isPlaying: false
    }));
  }

  const onRemoveClick = (track) => {
    return () => {

      if (track.id === queue[currentIndex].id) {
        playerRef.current.pause();

        dispatch(setIsPlaying({
          isPlaying: false
        }));
        
        playerRef.current.src = null;
        playerRef.current.setAttribute('data-id', null);
      }

      let trackIndex;
  
      queue.forEach((item, index) => {
        if (item.id === track.id) {
          trackIndex = index;
        }
      });
  
      dispatch(removeTrackFromQueue(username, trackIndex));
    }
  }

  const isItemAlreadyPresent = (track) => {
    const filteredQueue = queue.filter((item) => {
      if (track.id === item.id) return true;

      return false;
    });

    if (filteredQueue.length) return true;

    return false;
  }

  const isItemActive = (track) => {
    if (track.id === queue[currentIndex]?.id) return true;

    return false;
  }

  const renderSearchResults = () => {
    if (loading) {
      const shimmers = [];
      for (let i=0; i<2; i=i+1) {
        shimmers.push(
          <BlockShimmer key={i} blockClass={classes.blockClass} />
        );
      }
      return shimmers;
    }

    return searchResults.map((item, index) => {
      return (
        <MediaCard 
          url={item.url}
          thumbnail={item.thumbnail}
          title={item.title}
          duration={formatDuration(item.duration)}
          key={index}
          isPresent={isItemAlreadyPresent(item)}
          isActive={isItemActive(item)}
          isTrackLoading={isTrackLoading}
          isPlaying={isPlaying}

          onAddClick={onAddToQueueClick(item)}
          onRemoveClick={onRemoveClick(item)}
          onPlayClick={onPlayClick(item)}
          onPauseClick={onPauseClick}

          containerClass={classes.mediaContainerClass}
        />
      );
    })
  }

  return (
    <div className={classes.container}>
      {renderSearchResults()}
    </div>
  );
}

SearchResults.propTypes = {
  loading: PropTypes.bool.isRequired,
  searchResults: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired
}

export default SearchResults;