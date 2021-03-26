import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  searchResults: [],
  nextPageToken: '',
  loading: false,
  loadingMore: false,
  error: false,
  errorMore: false
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
    fetchSearchResultsFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    fetchMorePending: (state) => {
      state.loadingMore = true;
      state.errorMore = false;
    },
    fetchMoreSuccess: (state, action) => {
      const { payload } = action;

      state.loadingMore = false;
      state.errorMore = false;
      state.searchResults = [...state.searchResults, ...payload.searchResults];
      state.nextPageToken = payload.nextPageToken
    },
    fetchMoreFailure: (state) => {
      state.loadingMore = false;
      state.errorMore = true;
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
  fetchMorePending,
  fetchMoreSuccess,
  fetchMoreFailure,
  clearSearchResults
} = SearchSlice.actions;

export default SearchSlice.reducer;