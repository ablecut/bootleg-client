import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import MediaCard from '../../../../components/MediaCard';
import BlockShimmer from '../../../../components/BlockShimmer';
import { addTrackToQueue, playTrack } from '../../../../store/modules/Queue/thunks/queueThunk';
import { formatDuration } from '../../../../utils';

import classes from './index.module.css';

const SearchResults = (props) => {

  const { loading, searchResults, username } = props;

  const dispatch = useDispatch();

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

          onAddClick={onAddToQueueClick(item)}
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