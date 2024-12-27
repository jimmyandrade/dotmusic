import { type MetaHTMLAttributes } from 'react';

export enum CustomSearchError {
  MISSING_API_KEY = 'GOOGLE_CUSTOM_SEARCH_API_KEY is not defined',
  MISSING_ENGINE_ID = 'GOOGLE_CUSTOM_SEARCH_ENGINE_ID is not defined',
}

type Encoding = 'utf8';
type Kind = 'customsearch#search';

interface CustomSearchRequest {
  title: string;
  totalResults: string;
  searchTerms: string;
  startIndex: number;
  inputEncoding: Encoding;
  outputEncoding: Encoding;
  safe: 'off';
  cx: string;
}

type CustomSearchImageProps = {
  height?: string;
  src: string;
  width?: string;
};

type MetatagKey = NonNullable<MetaHTMLAttributes<HTMLMetaElement>['name']>;
type MetatagValue = MetaHTMLAttributes<HTMLMetaElement>['content'];
type Metatag = Record<MetatagKey, MetatagValue>;

interface SiteNavigationElement {
  name: string;
}

interface MusicEvent {
  enddate: string;
  name: string;
  startdate: string;
  url: string;
}

interface CustomSearchResult {
  kind: Kind;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_image: CustomSearchImageProps[];
    cse_thumbnail: CustomSearchImageProps[];
    metatags: Metatag[];
    musicevent: MusicEvent[];
    sitenavigationelement: SiteNavigationElement[];
  };
}

export interface CustomSearchResponseData {
  kind: Kind;
  url: {
    type: 'application/json';
    template: string;
  };
  queries: {
    request: CustomSearchRequest[];
  };
  context: {
    title: string;
  };
  searchInformation: {
    searchTime: number;
    formattedSearchTime: string;
    totalResults: string;
    formattedTotalResults: string;
  };
  items: CustomSearchResult[];
}
