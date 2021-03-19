import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  searchResults: [],
  nextPageToken: '',
  loading: false,
  error: false
};

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      const { payload } = action;
      
      state.searchQuery = payload.newSearchQuery;
    },
    fetchSearchResultsPending: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchSearchResultsSuccess: (state, action) => {
      const { payload } = action;

      state.loading = false;
      state.error = false;
      state.searchResults = payload.searchResults;
      state.nextPageToken = payload.nextPageToken
    },
    fetchSearchResultsFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    clearSearchResults: (state) => {
      state.searchQuery = '';
      state.searchResults = [];
      state.nextPageToken = '';
    }
  }
});

export const {
  setSearchQuery,
  fetchSearchResultsPending,
  fetchSearchResultsSuccess,
  fetchSearchResultsFailure,
  clearSearchResults
} = SearchSlice.actions;

export default SearchSlice.reducer;