import { api } from '../../../../config/api';
import { searchUrls } from '../../../../config/url';
import {
  fetchSearchResultsPending,
  fetchSearchResultsSuccess,
  fetchSearchResultsFailure
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
      const errorMessage = err?.response?.data?.error;
      errorCallback(errorMessage || 'Some Error Occured');
      dispatch(fetchSearchResultsFailure());
    }
  }
}