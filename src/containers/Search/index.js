import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import SearchField from './components/SearchField';
import { setSearchQuery, clearSearchResults } from '../../store/modules/Search/slices/search';
import { fetchSearchResults } from '../../store/modules/Search/thunks/searchThunk';

const Search = () => {

  const searchQuery = useSelector((state) => {
    return state.search.searchQuery;
  });

  const dispatch = useDispatch();

  const errorCallback = (errorMessage) => {
    //TODO: Replace with toast util
    console.log(errorMessage);
  }

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
    },errorCallback))
  }

  return (
    <div>
      <SearchField 
        initialValue={searchQuery}

        handleClearButtonClick={handleClearButtonClick}
        handleSearchButtonClick={handleSearchButtonClick}
      />
    </div>
  );
}

export default Search;
