import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import MediaCard from '../../../../components/MediaCard';
import BlockShimmer from '../../../../components/BlockShimmer';
import { addTrackToQueue, playTrack, removeTrackFromQueue } from '../../../../store/modules/Queue/thunks/queueThunk';
import { formatDuration } from '../../../../utils';

import classes from './index.module.css';

const SearchResults = (props) => {

  const { loading, searchResults, username } = props;

  const dispatch = useDispatch();

  const { queue, currentIndex } = useSelector((state) => {
    return state.queue;
  })

  const onAddToQueueClick = (track) => {
    return () => {
      dispatch(addTrackToQueue(username, track));
    }
  }

  const onPlayClick = (track) => {
    return () => {
      dispatch(playTrack(username, track));
    }
  }

  const onRemoveClick = (track) => {
    return () => {
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

          onAddClick={onAddToQueueClick(item)}
          onRemoveClick={onRemoveClick(item)}
          onPlayClick={onPlayClick(item)}

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