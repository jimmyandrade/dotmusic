export enum ResourceKind {
  Channel = 'youtube#channel',
  Playlist = 'youtube#playlist',
  SearchListResponse = 'youtube#searchListResponse',
  SearchResult = 'youtube#searchResult',
  Video = 'youtube#video',
}

export enum YouTubeSearchError {
  MISSING_API_KEY = 'Can not search YouTube videos without an API key',
  MISSING_CHANNEL_ID = 'Can not search YouTube videos without a channel ID',
}

type RegionCode = 'BR';

interface YouTubeVideoId {
  kind: ResourceKind.Video;
  videoId: string;
}

interface YouTubeChannelId {
  kind: ResourceKind.Channel;
  channelId: string;
}

interface YouTubeSearchResult {
  kind: ResourceKind.SearchResult;
  etag: string;
  id: YouTubeVideoId | YouTubeChannelId;
}

export interface YouTubeSearchListResponse {
  kind: ResourceKind.SearchListResponse;
  etag: string;
  regionCode: RegionCode;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YouTubeSearchResult[];
}
