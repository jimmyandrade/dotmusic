import { YouTubeSearchError, YouTubeSearchListResponse } from '../model';

export const searchYouTubeVideos = async (query: string) => {
  const baseURL = 'https://www.googleapis.com/youtube/v3/search';
  const url = new URL(baseURL);

  if (typeof process.env.YOUTUBE_API_KEY !== 'string') {
    throw new Error(YouTubeSearchError.MISSING_API_KEY);
  }

  if (typeof process.env.YOUTUBE_CHANNEL_ID !== 'string') {
    throw new Error(YouTubeSearchError.MISSING_CHANNEL_ID);
  }

  url.searchParams.append('channelId', process.env.YOUTUBE_CHANNEL_ID);
  url.searchParams.append('key', process.env.YOUTUBE_API_KEY);
  url.searchParams.append('q', query);

  const response = await fetch(url.toString());
  const data = await response.json();
  return data as YouTubeSearchListResponse;
};
