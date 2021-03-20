import React from 'react';
import PropTypes from 'prop-types';

import MediaCard from '../../../../components/MediaCard';
import BlockShimmer from '../../../../components/BlockShimmer';

import classes from './index.module.css';

const SearchResults = (props) => {

  const { loading, searchResults } = props;

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
          channelName={item.channelName}
          key={index}

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
  searchResults: PropTypes.array.isRequired
}

export default SearchResults;