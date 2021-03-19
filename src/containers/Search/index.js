import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import SearchField from './components/SearchField';
import { setSearchQuery, clearSearchResults } from '../../store/modules/Search/slices/search';
import { fetchSearchResults } from '../../store/modules/Search/thunks/searchThunk';
import { displayErrorToast } from '../../utils';

const Search = () => {

  const searchQuery = useSelector((state) => {
    return state.search.searchQuery;
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

  return (
    <div>
      <ToastContainer
        autoClose={2000}
        pauseOnHover={false}
      />
      <SearchField 
        initialValue={searchQuery}

        handleClearButtonClick={handleClearButtonClick}
        handleSearchButtonClick={handleSearchButtonClick}
      />
    </div>
  );
}

export default Search;
