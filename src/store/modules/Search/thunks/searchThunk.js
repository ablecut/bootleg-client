import { api } from '../../../../config/api';
import { searchUrls } from '../../../../config/url';
import { thunkErrorHandler } from '../../../../utils';
import {
  fetchSearchResultsPending,
  fetchSearchResultsSuccess,
  fetchSearchResultsFailure,
  fetchMorePending,
  fetchMoreSuccess,
  fetchMoreFailure
} from '../slices/search';

export const fetchSearchResults = (payload, errorCallback) => {
  return async (dispatch) => {
    try{
      dispatch(fetchSearchResultsPending());

      const searchUrl = `${searchUrls.fetchSearchResults}?searchQuery=${payload.searchQuery}`;
      const response = await api.get(searchUrl);

      dispatch(fetchSearchResultsSuccess({
        searchResults: response.data.searchData,
        nextPageToken: response.data.nextPageToken
      }));
    }
    catch(err) {
      thunkErrorHandler(err, dispatch, errorCallback, fetchSearchResultsFailure);
    }
  }
}

export const fetchMore = (payload, errorCallback) => {
  return async (dispatch) => {
    try{
      dispatch(fetchMorePending());

      const searchUrl = `${searchUrls.fetchSearchResults}?searchQuery=${payload.searchQuery}&pageToken=${payload.nextPageToken}`;
      const response = await api.get(searchUrl);

      dispatch(fetchMoreSuccess({
        searchResults: response.data.searchData,
        nextPageToken: response.data.nextPageToken
      }));
    }
    catch(err) {
      thunkErrorHandler(err, dispatch, errorCallback, fetchMoreFailure);
    }
  }
}