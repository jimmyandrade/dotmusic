import { CustomSearchError, type CustomSearchResponseData } from '../model';

export const fetchGoogleCustomSearchResults = async (
  query: string,
): Promise<CustomSearchResponseData> => {
  const customSearchBaseURL = 'https://www.googleapis.com/customsearch/v1';
  const url = new URL(customSearchBaseURL);

  if (typeof process.env.GOOGLE_CUSTOM_SEARCH_API_KEY === 'undefined') {
    throw new Error(CustomSearchError.MISSING_API_KEY);
  }

  if (typeof process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID === 'undefined') {
    throw new Error(CustomSearchError.MISSING_ENGINE_ID);
  }

  url.searchParams.append('key', process.env.GOOGLE_CUSTOM_SEARCH_API_KEY);
  url.searchParams.append('cx', process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID);
  url.searchParams.append('q', query);

  const response = await fetch(url.toString());
  const data = await response.json();
  return data as CustomSearchResponseData;
};
