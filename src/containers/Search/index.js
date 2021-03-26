import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { SyncLoader } from 'react-spinners';

import SearchField from './components/SearchField';
import SearchResults from './components/SearchResults';
import Button from '../../components/Button';
import { setSearchQuery, clearSearchResults } from '../../store/modules/Search/slices/search';
import { fetchSearchResults, fetchMore } from '../../store/modules/Search/thunks/searchThunk';
import { displayErrorToast } from '../../utils';

import classes from './index.module.css';

const Search = () => {

  const { searchQuery, searchResults, loading, nextPageToken, loadingMore }= useSelector((state) => {
    return state.search;
  });

  const dispatch = useDispatch();

  const handleClearButtonClick = () => {
    dispatch(setSearchQuery({
      newSearchQuery: ''
    }));
    dispatch(clearSearchResults());
  }

  const handleSearchButtonClick = (newSearchQuery) => {

    if (searchQuery === newSearchQuery) return;

    if (newSearchQuery === '') {
      dispatch(clearSearchResults())
      return;
    }

    dispatch(setSearchQuery({
      newSearchQuery
    }));

    dispatch(fetchSearchResults({
      searchQuery: newSearchQuery
    },displayErrorToast))
  }

  const onLoadMoreClick = () => {
    dispatch(fetchMore({
      searchQuery,
      nextPageToken
    }))
  }

  const renderLoadMoreButton = () => {

    if (loading || searchResults.length === 0) return null;

    if (loadingMore) {
      return (
        <div className={classes.buttonContainer}>
          <SyncLoader color='#6930C3' size={12} />
        </div>
      );
    }

    return (
      <div className={classes.buttonContainer}>
        <Button 
          label='Load More'

          onClick={onLoadMoreClick}

          buttonClass={classes.button}
        />
      </div>
    );
  }

  return (
    <div className={classes.container}>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
      />
      <SearchField 
        initialValue={searchQuery}

        handleClearButtonClick={handleClearButtonClick}
        handleSearchButtonClick={handleSearchButtonClick}
      />
      <SearchResults 
        loading={loading}
        searchResults={searchResults}
      />
      {renderLoadMoreButton()}
    </div>
  );
}

export default Search;
